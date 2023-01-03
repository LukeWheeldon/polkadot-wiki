---
id: learn-common-goods
title: Common Good Parachains
sidebar_label: Common Good Parachains
description: Learn about Common Good Parachains and ones currently on the network.
keywords: [common good, parachains, system level, public utility]
slug: ../learn-common-goods
---

import RPC from "./../../components/RPC-Connection";

## Overview

"Common Good" parachains are parachain slots reserved for functionality that benefits the ecosystem
as a whole. By allocating a subset of parachain slots to common good chains, the entire network can
realize the benefit of valuable parachains that would otherwise be underfunded due to the free-rider
problem. They are not allocated via the parachain auction process but by the on-chain
[governance](learn-governance.md) system. Generally, a common good parachain's lease does not expire
and can only be removed via governance.

The purpose of these parachains will probably fall into one of two categories

1. [System Level Chains](#system-level-chains)
2. [Public Utility Chains](#public-utility-chains)

## System Level Chains

System level chains move functionality from the Relay Chain into parachains, minimizing the
administrative use of the Relay Chain. For example, a governance parachain could move all the
governance processes from the Relay Chain into a parachain. Adding a system level chain is generally
not controversial because they merely move functionality that the stakeholders already agreed was
useful from one place (the Relay Chain) to another (a parachain).

Moving the logic from the Relay Chain to a parachain is an optimization that makes the entire
network more efficient. Moving system level logic to a parachain frees capacity in the Relay Chain
for its primary function, validating parachains. Adding a system level chain makes the network
capable of processing several more parachains. Rather than taking a single slice of a 100 parachain
pie, a system level chain takes one slice and bakes a bigger pie.

The vast majority of common good chains will likely be unopinionated system level chains.

## Public Utility Chains

Public utility chains add functionality that stakeholders believe will add value to the entire
network. Because public utility chains add new functionality, there is a subjective component to
their addition. The network's stakeholders must believe that it is worth allocating a slot that
would otherwise go to the winners of an auction and thus would have an objective expression
conviction from its backers. Governance provides the means to internalize the value of the parachain
slot and distribute it across all members of the network.

Public utility chains will always be fully aligned with their Relay Chain stakeholder base. This
means that they will adopt the Relay Chain's native token (i.e. DOT or KSM) as their native token
and respect any messages incoming from the Relay Chain and system level parachains at face value.

Some examples of potential public utility chains are bridges, DOT/KSM-denominated smart contract
platforms, and [generic asset chains](#statemint).

Public utility parachains would typically grant privileged business logic to
{{ polkadot: Polkadot :polkadot }}{{ kusama: Kusama :kusama }}'s governance. Just as the
{{ polkadot: Polkadot :polkadot }}{{ kusama: Kusama :kusama }} Relay Chain has several privileged
functions like setting the validator count or allocating
{{ polkadot: DOT :polkadot }}{{ kusama: KSM :kusama }} from the Treasury, these parachains can have
privileged functions like changing system parameters or triggering an upgrade.

Because public utility chains add functionality beyond the scope of the Relay Chain, they are likely
to only be approved by the network stakeholders in rare scenarios.

## Common Good Chains

### {{ polkadot: Statemint :polkadot }}{{ kusama: Statemine :kusama }}

{{ polkadot: [Statemint](https://github.com/paritytech/cumulus#statemint-) :polkadot }}
{{ kusama: [Statemine](https://github.com/paritytech/cumulus#statemint-) :kusama }} and its cousin
{{ polkadot: Statemine :polkadot }}{{ kusama: Statemint :kusama }} on
{{ polkadot: Kusama :polkadot }}{{ kusama: Polkadot :kusama }}, are the first common good
parachains.

{{ polkadot: Statemint :polkadot }}{{ kusama: Statemine :kusama }} is a public utility chain in that
it adds functionality not available in the Relay Chain, namely, the creation and management of
assets. {{ polkadot: Statemint :polkadot }}{{ kusama: Statemine :kusama }} will support both
fungible and non-fungible assets. The chain offers an interface similar to ERC-20 for fungible
tokens and ERC-721 for non-fungible token. These interfaces are in the logic of the chain itself; by
encoding this logic directly into the
{{ polkadot: Statemint :polkadot }}{{ kusama: Statemine :kusama }} runtime, token storage, and
actions do not need to be metered and can happen faster and cheaper.

Like most common good chains, {{ polkadot: Statemint :polkadot }}{{ kusama: Statemine :kusama }}
will use the {{ polkadot: DOT :polkadot }}{{ kusama: KSM :kusama }} as its native token, i.e.
represented in its instance of the Balances pallet.
{{ polkadot: Statemint :polkadot }}{{ kusama: Statemine :kusama }} trusts messages about balances
from the Relay Chain, and vice versa, so users can transfer
{{ polkadot: DOT :polkadot }}{{ kusama: KSM :kusama }} from the Relay Chain to their address on
{{ polkadot: Statemint :polkadot }}{{ kusama: Statemine :kusama }} and back.

Because of the efficiency of executing logic in a parachain, the transaction fees and deposits
(including the existential deposit) are about 1/10th of their value on the Relay Chain. These low
fee levels mean that {{ polkadot: Statemint :polkadot }}{{ kusama: Statemine :kusama }} is well
suited to handling {{ polkadot: DOT :polkadot }}{{ kusama: KSM :kusama }} balances and transfers as
well as managing on-chain assets.

For example, the existential deposit for
{{ polkadot: Polkadot :polkadot }}{{ kusama: Kusama :kusama }} is
{{ polkadot: <RPC network="polkadot" path="consts.balances.existentialDeposit" defaultValue={10000000000} filter="humanReadable"/>,  :polkadot }}
{{ kusama: <RPC network="kusama" path="consts.balances.existentialDeposit" defaultValue={333333333} filter="humanReadable"/>,  :kusama }}
while only
{{ polkadot: <RPC network="statemint" path="consts.balances.existentialDeposit" defaultValue={1000000000} filter="humanReadable"/>  :polkadot }}
{{ kusama: <RPC network="statemine" path="consts.balances.existentialDeposit" defaultValue={3333333} filter="humanReadable"/>  :kusama }}
on {{ polkadot: Statemint. :polkadot }}{{ kusama: Statemine. :kusama }}

As a common good parachain, {{ polkadot: Statemint :polkadot }}{{ kusama: Statemine :kusama }} must
stay fully aligned with the Relay Chain. Upgrades to
{{ polkadot: Statemint :polkadot }}{{ kusama: Statemine :kusama }} will require the Relay Chain's
"root origin", i.e. a referendum. Some of the other logic (like privileged asset functionality) will
defer to the Relay Chain's Council.

### Collectives

Collectives are also categorized under common good chains. You may already be familiar with the
{{ polkadot: Polkadot :polkadot }}{{ kusama: Kusama :kusama }}
[Council](./learn-governance.md#council) and
[Technical Committee](./learn-governance.md#technical-committee) collectives, both of which will be
retired with the introduction of [OpenGov](./learn-opengov.md). The ability to organize and act as a
group (without needing to trust third parties like lawyers and jurisdictional courts) remains an
important element of Web3. OpenGov introduces a new collective called the
[Fellowship](./learn-opengov.md#fellowship) to help aid in addressing this need.

Another collective in development is the Polkadot Alliance. Several community teams banded together
about two years ago and came up with the idea for the Alliance, primarily to fight misuse of the
Polkadot brand and unattributed code. This collectives parachain will connect only to Polkadot and
there are no plans for a Kusama counterpart. In fact, for some collectives, like the Alliance, the
Kusama network could actually join the collective as a member. That is, networks themselves can act
as collectives and express their legislative voices as single opinions within other networks. This
is achieved with the assitance from a [bridge hub](#bridges).

### Bridge Hub

Bridges are a complex subject with many technical requirements. Before Polkadot and Kusama supported
their first parachains, the only way to design a bridge was to put the logic onto the Relay Chain
itself. Since both networks support parachains, it now makes sense to have a parachain on each
network dedicated to bridges. Because of the execution isolation provided by parachains, the
activity on a parachain does not affect the Relay Chain or other parachains. So, a bridge hub can
support bridges to many other consensus systems.

In practice, a bridge between Polkadot and Kusama will allow collectives like the Alliance and
Fellowship to serve both networks, and even allow for Kusama to act as a unified voice and
participant within those collectives or the Polkadot network as a whole.

For additional information regarding bridges and projects related to bridging, see the
[bridges page](learn-bridges.md).

### Encointer

Encointer is a blockchain platform for self-sovereign ID and a global universal basic income. With
[referendum 158](https://kusama.polkassembly.io/referendum/158) Encointer was registered as the
second common good parachain on Kusama's network. The functionality of Encointer adds logic to the
Relay Chain that aims to bring financial inclusivity to WEB3 and mitigate Sybil attacks with a novel
Proof of Personhood (PoP) system for unique identity.

Encointer offers a framework that, in principle, allows for any group of real people to create,
distribute and use their own digital community tokens.
[Referendum 187](https://kusama.polkassembly.io/referendum/187) introduced a runtime upgrade
bringing governance and full functionality for communities to be able to use the protocol.

Encointer aims to invert the
[Cantillon Effect](https://www.newworldencyclopedia.org/entry/Richard_Cantillon), where money is
issued at the bottom, and not as credit to businesses or creditworthy individuals. This way, every
individual gets a [universal basic income (UBI)](https://book.encointer.org/economics-ubi.html).

To resist Sybil attacks, the Encointer protocol uses a PoP mechanism to foster a unique identity
system. The notion is that a person can only be present at one place at a given time. Participants
are requested to attend physical key-signing ceremonies with small groups of random people at
randomized locations, where these local meetings are part of one global ceremony that co-occur.
Participants use the Encointer wallet app to participate in these ceremonies, and the wallet enables
the management of local community currencies. Watch an Encointer ceremony in action in
[this video](https://www.youtube.com/watch?v=tcgpCCYBqko).

The protocol involves [other mechanisms](https://book.encointer.org/ssi.html#privacy-considerations)
to protect the privacy of users in addition to the physical key-signing ceremonies.

Encointer falls under common good logic as it offers a Sybil defense mechanism and a basis for
digital democracy. This can also be adapted by system level chains which can use the unique identity
system to prevent Sybil attacks, and use PoP for token airdrops or faucets.

:::tip

To learn more about Encointer, check out the official
[Encointer book](https://book.encointer.org/introduction.html).

:::
