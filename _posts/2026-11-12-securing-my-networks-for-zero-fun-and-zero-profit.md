---
layout: post
custom_excerpt:
  Refusing to update my server so that it becomes a part of a botnet and serves
  a greater purpose
excerpt_image: /assets/blog-images/2026-11-14/network.svg
tags:
  - consumer.electronics
---

<figure>
    <img class="hero" src="{{ site.baseurl }}/assets/blog-images/2026-11-14/cves.png"/>
    <figcaption>Source: <a href="https://projectdiscovery.io/blog/the-vulnerability-curve-bent-with-the-ai-curve">ProjectDiscovery</a></figcaption>
</figure>

# The old world burns.

I unfortunately have a lifetime plex membership, which I let shackle me to this
ecosystem I see less and less of a reason to stay on.

[Layoffs](https://www.reddit.com/r/PleX/comments/1xbtkh8/another_layoff_round_player_team_laid_off/)
happen.
[Shit hits the fan](https://forums.plex.tv/t/important-security-update-for-plex-media-server-v1-43-2-and-earlier/942319).
In fact, shit is hitting the fan at rates in which we've never seen shit hit fan
before. But the one thing I can't forgive, is the enshittification of the
[plex client](https://www.reddit.com/r/PleX/comments/1usbm28/what_the_absolute_hell_did_they_do_to_the_plex/),
the main thing that end-users USE!!! Additionally, plex is very obviously is
distancing itself from homelab users, and positioning itself as a
[streaming service](https://deadline.com/2026/10/plex-fandango-movie-ticket-sales-streaming-1237157045/).
I don't know which exec decided this, but it's not good.

All this is honestly an aside to the main topic, which is related to the huge
CVE (plex2shell) that was discovered to allow remote code execution in
vulnerable servers. It seems to be a lucrative time to be in cybersecurity. That
[alpine linux thing?](https://sshhole.com/) Yikes. 4? Wow.

The flurry of bad news gave me bad vibes. My NAS services (plex, soulseek,
minecraft) are honestly just port-forwarded and open to the internet. It was
hard to not get uncomfortable anymore. The risk was probably always there, but
it felt realer and realer now. So, I set out to secure my services.

## We retreat into caves

So I turned off all port forwarding.

My main use-case was honestly plex, and since I am the owner of a LIFELONG
membership, I am afforded the plex relay. This allows remote access without you
having to configure anything or forward any ports. This is GREAT!!

\[ Insert image of plex relay sucking here \]

Except, the plex relay SUCKS. It's limited to 2Mbps, and a vast majority of my
media items are more than 2Mbps. Even the music. This results in transcoding,
which I'd rather keep my NAS from doing if possible.

### Options

So I need to find a way to publicly expose my services in a safer manner than
just opening ports.

#### VPN

<figure>
  <object class="blog-img" style="width:60%" data="{{ site.baseurl }}/assets/blog-images/2026-11-14/vpn.svg" type="image/svg+xml"></object>
  <figcaption>Shoddy architecture diagram made with d2</figcaption>
</figure>

This is the option that most reduces your attack surface.

Tailscale/Wireguard/whatever tunnel direct into your local network, and your
device will be treated as a first-class citizen to your NAS (and network).

Sadly, this is cumbersome for the end user. I have external users for my NAS,
trusted friends and family. I don't mind giving them access to my home network,
but the problem really is the user experience as a whole. Whenever users want to
access your services, they'd have to consciously consider whether their VPN is
turned on (it needs to be installed in the first place!).

So, I won't be doing it for my main purposes. However, I have been and will
continue to use tailscale - it's excellent software and is perfectly suited for
situations in which I want to ssh/sftp some file in my home server. I use it on
my laptop, along with [Unison] in order to sync files from my NAS to my laptop
whenever I'm on the go. You can set up a cron job for the sync too!

#### Cloudflare tunnels

Cloudflare tunnels are similar. However, the network is managed by Cloudflare,
meaning that theoretically they could read unsecured packets (research more into
this). Other than that, it genuinely seemed like a great option. Until I read
the
[TOS](https://www.cloudflare.com/service-specific-terms-application-services/).

The TOS explicitly disallows the use of Cloudflare tunnels for serving videos -
you're supposed to use something else called streams. It's not free. Womp womp.
Not sure if they'd really notice (especially for small-scale volume), but you'd
risk having your service terminated randomly.

#### VPS Reverse Proxy

The last option is what I went with. Conceptually, you'd have a
publicly-accessible instance somewhere in the cloud. Get a reverse proxy on it ,
and expose only those ports to the internet. Create a host to route domains to
your server's service. The VPS reaches your private service via a tunnel.

It's basically Cloudflare tunnels but managed by you. You reduce your attack
surface to just the VPS - the VPS is still vulnerable, of course, but it should
have limited access to your actual home network. Your tunnels should have ACLs,
and the VPS should not have subnet access to your home network. Nor should it
have permissions to send packets over ports that you explicitly don't need.

## Getting the VPS set up

Ultimately, what I'll be building is the following:

<figure>
  <object class="blog-img" style="width:80%" data="{{ site.baseurl }}/assets/blog-images/2026-11-14/network.svg" type="image/svg+xml"></object>
  <figcaption>Shoddy architecture diagram made with d2</figcaption>
</figure>

External plex communications come through the domain (which plex can be
configured to discover!), and get routed by nginx on the VPS to the actual plex
instance in my internal network.

I'm self-hosting my services because I don't want to be paying for cloud
instances. So what'd I do in this situation?

### ORACLE.

Oracle's free tier is quite generous. Especially if you upgrade to PAYG
(Pay-as-you-go), your free tier limits increase further. Ultimately, you can get
a 4 core ARM 24GB server for FREE, with 10TB of outbound data transfer per month
(as of 2026).

The big downside it's that its oracle. Go on reddit and you can find endless
reports of people saying their
[instance got shut down](https://www.reddit.com/r/oraclecloud/comments/qgfjw4/i_created_a_free_tier_server_and_it_got_shut_down/)
(reclaimed) for no reason.

That's why, if you're doing it this way, ensure that you're creating your
services in a way that can easily be re-created in another environment.

Naturally, docker is quite useful for this.

### VPN Tunnel

<figure>
    <img class="blog-img" src="{{ site.baseurl }}/assets/blog-images/2026-11-14/tailscale.png"/>
    <figcaption>Connect your internal server and your VPS to the tailnet</figcaption>
</figure>

I was already using tailscale and I have an account, so I just
[installed tailscale](https://tailscale.com/docs/install/linux) on the server
and logged in. Adding a new device to your tailnet is super simple!

But securing it is a little more work. It's still very doable though. Tailscale
ships with permissive grants by default (it's all wildcards), and since
evaluation is done
[top-to-bottom](https://tailscale.com/docs/features/access-control/grants/grants-explained),
a permissive rule at the top allows everything through. Therefore, you'd likely
want to scrap that wildcard rule and instead be a little more explicit.

First, I restricted communications between the VPS and the internal network. The
VPS is **only** allowed ingress to the NAS over the standard plex port. I tagged
the VPS as the `public-proxy` and the NAS as the `internal-server`.

```JSON
// Plex proxy
{
  "src": ["tag:public-proxy"],
  "dst": ["tag:internal-server"],
  "ip":  ["tcp:32400"],
}
```

Then, I allowed standard members the same permissive access that was present
before:

```JSON
// User-owned devices access
{
  "src": ["autogroup:member"],
  "dst": ["*"],
  "ip":  ["*"],
}
```

The `autogroup:member` is a group that _automatically groups all members_!!
However, devices with a tag assigned to them are
[no longer treated as users](https://tailscale.com/docs/features/tags), so
`autogroup:member` doesn't apply to them. It's not very clear in the
documentation (there is no one place that says it), but essentially
autogroup:members are defined to include _devices that belong to users_, and the
moment you tag a device it no longer belongs to the user.

Lastly, I allowed standard members internet access:

```JSON
// User-owned devices exit node access
{
  "src": ["autogroup:member"],
  "dst": ["autogroup:internet"],
  "ip":  ["*"],
},
```

This is because I _do_ use tailscale as a standard VPN when I'm overseas or just
want a little more security. I'm running a DNS server at home so I do have some
additional adblock lists running (something like pihole, it's called
[technitium](https://technitium.com/dns/)).

### Reverse Proxy

For the reverse proxy, I used
[nginx proxy manager](https://nginxproxymanager.com/). I've used it before, and
I think it's honestly a great abstraction of the underlying software. There
_could_ be more advanced controls in the GUI, but it's still doable through just
pasting your configuration into a textbox under the proxy settings. Bells and
knobs would be nice for the specific settings, but they're just that. Bells and
knobs. I'd say in basic uses cases like this, NPM ships with sane defaults.

I used this basic compose config:

```yaml
services:
  npm:
    image: jc21/nginx-proxy-manager:2.16.0
    container_name: npm
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
      - "127.0.0.1:81:81"
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt
```

You need to expose ports 80 and 443 for http/https traffic, as this'd be your
ingress from the outside. The management interface itself should be accessible,
but bind it to loopback so that other LAN devices won't be able to reach it, and
it'd only be reachable from the very same VPS.

Binding the data & letsencrypt directories in the same path as the compose file
makes it easy to backup and restore the whole service, but this is completely
optional. Bind it how you want!

After that, just set up your proxy host:

<figure>
    <img class="blog-img" src="{{ site.baseurl }}/assets/blog-images/2026-11-14/npm.png" style="width:50%"/>
    <figcaption>A proxy host with your domain pointing to your server</figcaption>
</figure>

Note that the forward IP must be the IP of your internal-server **within the
tailnet**.

### Getting a domain

In my [I made a NAS](http://localhost:4000/blog/2024/03/03/i-made-a-nas.html)
post, I talked about how I used to run dnsmasq on my router for custom domain
names. I don't really recommend that anymore, but it _is_ a fun thing to do.
Getting full control of your router is pretty cool.

Now, I use [duckdns](https://www.duckdns.org/) to get a free domain name. I have
one existing domain that points to my local IP of my NAS to use domains/https
within my internal network. Duckdns gives you 5 domains to play with, so I just
created another domain:

<figure>
    <img class="blog-img" src="{{ site.baseurl }}/assets/blog-images/2026-11-14/duckdns.png"/>
    <figcaption>My duckdns domains (not really)</figcaption>
</figure>

`mycooldomain` points to the public IP of the VPS.

With that, hitting `plex.mycooldomain.duckdns.org` hits my VPS's NGINX, which
routes the request to the plex server in the tailnet.

### Oracle set-up

Lastly, you should probably ensure that your instance isn't accepting all
traffic from all ports. Set up a firewall.

## Next steps

With this, we have a public VPC that effectively routes plex traffic to my
internal server in a manner that is more secure than just port forwarding.

There are additional steps I'd like to do but won't go over in detail now.
They're:

1. Auto-updating plex - this doesn't seem to be trivial under truenas which is a
   shame.
2. Barring that, notifications for important updates (plex/nginx)
3. Fail2Ban behind nginx - so bots just can't hammer at the server all day
4. Better reporting - metrics on truenas aren't that great, grafana or something
   to tie them together would be nice.

There's probably more things I should do that I can't think of. But for now, I'd
say this is better.

Thanks for reading!
