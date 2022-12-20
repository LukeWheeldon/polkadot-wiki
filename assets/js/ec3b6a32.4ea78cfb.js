"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4004],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,m=d["".concat(l,".").concat(u)]||d[u]||c[u]||i;return a?n.createElement(m,o(o({ref:t},h),{},{components:a})):n.createElement(m,o({ref:t},h))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6794:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={id:"learn-nft",title:"NFTs",sidebar_label:"NFTs",description:"An explanation of the NFT landscape in the Polkadot ecosystem.",keywords:["NFT","non-fungible token","NFT 2.0"],slug:"../learn-nft"},l=void 0,p={unversionedId:"learn/learn-nft",id:"learn/learn-nft",title:"NFTs",description:"An explanation of the NFT landscape in the Polkadot ecosystem.",source:"@site/../docs/learn/learn-nft.md",sourceDirName:"learn",slug:"/learn-nft",permalink:"/docs/learn-nft",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-nft.md",tags:[],version:"current",lastUpdatedBy:"Keith Alfaro",lastUpdatedAt:1671233909,formattedLastUpdatedAt:"Dec 16, 2022",frontMatter:{id:"learn-nft",title:"NFTs",sidebar_label:"NFTs",description:"An explanation of the NFT landscape in the Polkadot ecosystem.",keywords:["NFT","non-fungible token","NFT 2.0"],slug:"../learn-nft"},sidebar:"docs",previous:{title:"DOT",permalink:"/docs/learn-DOT"},next:{title:"Statemint",permalink:"/docs/learn-statemint"}},h={},c=[{value:"Fungibility",id:"fungibility",level:2},{value:"NFT Standards",id:"nft-standards",level:2},{value:"A typical NFT on Ethereum",id:"a-typical-nft-on-ethereum",level:4},{value:"NFTs 2.0: NFTs in Polkadot &amp; Kusama",id:"nfts-20-nfts-in-polkadot--kusama",level:2},{value:"Unique network",id:"unique-network",level:3},{value:"NFT from Unqnft.io 2",id:"nft-from-unqnftio-2",level:4},{value:"RMRK",id:"rmrk",level:3},{value:"NFT Legos",id:"nft-legos",level:4},{value:"NFT from Kanaria",id:"nft-from-kanaria",level:4},{value:"Efinity",id:"efinity",level:3},{value:"Astar",id:"astar",level:3},{value:"Moonbeam",id:"moonbeam",level:3},{value:"Uniques",id:"uniques",level:3},{value:"Bridging",id:"bridging",level:2},{value:"References",id:"references",level:3}],d={toc:c};function u(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page is a high-level overview of NFTs and the various approaches to NFTs within the\nPolkadot network."),(0,i.kt)("h2",{id:"fungibility"},"Fungibility"),(0,i.kt)("p",null,"NFT stands for ",(0,i.kt)("em",{parentName:"p"},"non-fungible token"),". Fungibility means interchangeability inside of a group. In\ntheory, a $20 bill is always worth $20 in a store and identical in value to any other $20 bill. It\nis not, however, fungible with a $1 or $100 dollar bill (outside its group)."),(0,i.kt)("p",null,"A Pokemon\u2122 trading card of a Charizard is non-fungible with a card of Squirtle, whereas editions of\nCharizard are fungible with each other."),(0,i.kt)("p",null,"Fungibility is a spectrum - what is fungible to some might not be fungible to others. In reality,\nPokemon\u2122 cards, the canonical example of non-fungible assets are more fungible than US dollar bills,\neach of which has a unique serial number that may be important to a government agency. The cards\nhave no serial numbers ","[1]","."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.investopedia.com/thmb/Nr-RLORu5CX_lIWZfLmV5X0eIrc=/613x345/smart/filters:no_upscale()/Clipboard01-d20f6eb9351e4f36a46e11fd87b53b2d.jpg",alt:"one dollar"})),(0,i.kt)("p",null,'Additionally, a digital item like a "purple magic sword" in a game may be fungible with another\nvisually identical sword if all the player cares about is the looks of their character. But if the\nother sword has a different function, and that function influences the outcome of an adventure the\nplayer is about to embark on, then visually identical swords are absolutely non-fungible.'),(0,i.kt)("p",null,"Bearing that in mind, the simplest explanation of NFTs is that ",(0,i.kt)("strong",{parentName:"p"},'NFTs are rows of arbitrary,\nproject-specific, and non-interchangeable data that can be cryptographically proven to "belong" to\nsomeone'),". This data can be anything - concert tickets, attendance badges, simple words, avatars,\nplots of land in a metaverse, audio clips, house deeds, mortgages, and more."),(0,i.kt)("h2",{id:"nft-standards"},"NFT Standards"),(0,i.kt)("p",null,'A general-purpose blockchain is not built to natively understand the concept of NFTs. It is only\nnatively aware and optimized for its own native tokens, but implementations built on such a chain\nare essentially "hacks".'),(0,i.kt)("p",null,'For example, Ethereum is a general-purpose blockchain that does not have the concept of "tokens"\n(fungible or not) built-in. Tokens in Ethereum are essentially spreadsheets of information to be\ninterpreted and read in a certain way by various user interfaces. This ',(0,i.kt)("em",{parentName:"p"},"way")," in which they should\nread them is called a ",(0,i.kt)("em",{parentName:"p"},"standard"),"."),(0,i.kt)("p",null,"The most widespread fungible token standard you may have heard of is ERC20, while the most\nwidespread NFT standard is ERC721, followed closely by ERC1155. The downside of having to define\nthese standards is that they are always instructions for how to read a spreadsheet pretending to\nserve information in a certain way, which by definition cannot be optimized. For this reason, even\non a good day of extremely low network congestion, interactions with NFTs on any EVM chain will cost\na few dollars but were on average around $100 per interaction (transfer, mint, sale) in 2021 on\nEthereum."),(0,i.kt)("p",null,"This prevents use cases that go beyond the current craze of ",(0,i.kt)("em",{parentName:"p"},"digital dust gathering NFTs"),' on\nEthereum - profile pictures, generative "look once and then put away" art, ',(0,i.kt)("a",{parentName:"p",href:"ens"},"ENS")," addresses, and\n",(0,i.kt)("a",{parentName:"p",href:"https://poap.xyz/"},"proof of attendance badges"),"."),(0,i.kt)("h4",{id:"a-typical-nft-on-ethereum"},"A typical ",(0,i.kt)("a",{parentName:"h4",href:"https://opensea.io/assets/ethereum/0x2127fe7ffce4380459cced92f2d4793f3af094a4/12598"},"NFT on Ethereum")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"samurai nft",src:a(8101).Z,width:"506",height:"507"})),(0,i.kt)("p",null,"For the sake of comparison, we can refer to these as NFTs 1.0: static NFTs that are almost\nexclusively image-based collectibles of varying rarity."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"nfts-20-nfts-in-polkadot--kusama"},"NFTs 2.0: NFTs in Polkadot & Kusama"),(0,i.kt)("p",null,"This is where Polkadot's technology shines and\nwhere NFTs 2.0 come into play. By allowing\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-parachains"},"heterogeneous application-specific shards")," to exist, builders can natively\noptimize for complex NFT use cases without tradeoffs that would make interacting with the system\nprohibitively inefficient and expensive in other environments."),(0,i.kt)("p",null,"The following NFT solutions exist and are under development in the Polkadot and/or Kusama\necosystems:"),(0,i.kt)("h3",{id:"unique-network"},"Unique network"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://unique.network/"},"Unique network"),", an NFT-specific blockchain offering innovations such as\nsponsored transactions, bundling fungible tokens with non-fungibles, and splitting NFTs into\nfungible tokens for partial ownership."),(0,i.kt)("p",null,"Unique Network have launched two NFT projects to date: Substrapunks as part of\n",(0,i.kt)("a",{parentName:"p",href:"https://hackusama.devpost.com/"},"Hackusama"),", and Chelobricks as a recent promotion during\n",(0,i.kt)("a",{parentName:"p",href:"https://decoded.polkadot.network/"},"Polkadot Decoded"),". They are currently running a betanet which is\nbridged to Kusama, and on which these NFTs are already tradable."),(0,i.kt)("h4",{id:"nft-from-unqnftio-2"},"NFT from ",(0,i.kt)("a",{parentName:"h4",href:"https://unqnft.io"},"Unqnft.io")," ","[2]"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://unique.network/local/templates/unique/static/images/content/chel-400.jpg",alt:null})),(0,i.kt)("p",null,"Users can send KSM into their Unique Network escrow account, trade with it there, and then send any\nearned or leftover KSM back."),(0,i.kt)("p",null,"Unique Network aims to make their marketplace technology open-source and whitelabel-friendly. In\ntheory, it should be trivial to set up a new marketplace for your project using Unique's technology.\nUnique network aims to be a parachain on Polkadot, and Quartz is their Kusama counterpart."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Unique Network works closely with RMRK (see below).")),(0,i.kt)("h3",{id:"rmrk"},"RMRK"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://rmrk.app"},"RMRK"),' is a "hack", a forced standard directly on top of the Kusama relay chain.\nSince Kusama is meant to be lightweight to process the various parachains connected to it, it does\nnot have any other complex chain logic like native NFTs or smart contracts to enable them. However,\nbecause of market demand and Kusama\'s "chaotic" nature, the RMRK team decided to take the\n',(0,i.kt)("a",{parentName:"p",href:"https://en.bitcoin.it/wiki/Colored_Coins"},'"colored coins"')," approach from Bitcoin and implement NFTs\nas graffiti on the Kusama chain."),(0,i.kt)("p",null,'The RMRK standard is a set of rules and specifications for how to interpret special graffiti on\nKusama called "remarks", accessible via the core ',(0,i.kt)("inlineCode",{parentName:"p"},"system")," pallet in any Substrate chain."),(0,i.kt)("p",null,'The RMRK team has just launched the 2.0 version of the protocol, a set of "NFT legos", primitives\nthat, when put together, allow a builder to compose an NFT system of arbitrary complexity without\nsmart contracts.'),(0,i.kt)("h4",{id:"nft-legos"},"NFT Legos"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"NFTs can own other NFTs, NFTs can equip other NFTs for visual change"),(0,i.kt)("li",{parentName:"ol"},"NFTs can have multiple resources (different outputs based on context and resource priority)"),(0,i.kt)("li",{parentName:"ol"},"NFTs can have on-chain emotes (reactions) for price discovery and social mechanics"),(0,i.kt)("li",{parentName:"ol"},"NFTs have conditional rendering (e.g. show Mona Lisa as blushing if she got 50 kissy \ud83d\ude18 emoji)"),(0,i.kt)("li",{parentName:"ol"},"NFTs can be governed by the community via fungible shareholder-tokens (fractionalization of NFTs)")),(0,i.kt)("p",null,"The upcoming version 3.0 (Q1 2022) will be pallet and smart contract (EVM) versions of all RMRK 2.0\nlogic, and integration into partner chains for cheap and easy teleportation of non-fungibles across\ndozens of chains."),(0,i.kt)("h4",{id:"nft-from-kanaria"},"NFT from ",(0,i.kt)("a",{parentName:"h4",href:"https://kanaria.rmrk.app"},"Kanaria")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9379).Z,width:"1891",height:"799"})),(0,i.kt)("admonition",{title:"Multi-resource NFTs",type:"note"},(0,i.kt)("p",{parentName:"admonition"},'A multi-resource NFT (gif of statue, and SVG-composable dynamic NFT in one) that can also equip\nother NFTs from within its "inventory".')),(0,i.kt)("p",null,"The RMRK team is collaborating closely with Unique network. RMRK's logic and technology will be\ndeployed on Unique Network in the form of runtime upgrades (FRAME pallets)."),(0,i.kt)("p",null,"Two marketplaces for RMRK-based NFTs exist with hundreds of projects already launched:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://singular.rmrk.app"},"Singular"),", the official marketplace"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kodadot.xyz"},"Kodadot"),", a third party marketplace")),(0,i.kt)("p",null,"Additionally, RMRK 2.0 functionality featuring composable, nested, multi-resource NFTs can be\naccessed and tested on the ",(0,i.kt)("a",{parentName:"p",href:"https://kanaria.rmrk.app"},"Kanaria")," platform."),(0,i.kt)("p",null,"For a complete introduction into RMRK, see\n",(0,i.kt)("a",{parentName:"p",href:"https://url.rmrk.app/rmrkcc"},"the video explainer of RMRK"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://url.rmrk.app/kanariacc"},"the video explainer of Kanaria (RMRK 2)"),", and read\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.rmrk.app"},"the docs"),"."),(0,i.kt)("h3",{id:"efinity"},"Efinity"),(0,i.kt)("p",null,"Spearheaded by ",(0,i.kt)("a",{parentName:"p",href:"https://enjin.io"},"Enjin"),", the authors of Ethereum's ERC1155 standard and makers of\nthe Enjin wallet and Unity plugin, which allows easy implementation of NFTs into 3D games, Efinity\nis an NFT bridging chain coming to Kusama and Polkadot in 2022."),(0,i.kt)("p",null,"They plan to build a ",(0,i.kt)("em",{parentName:"p"},"paratoken")," which would be a standard for token migration across different\nparachains in the Polkadot ecosystem, but also into and out of Ethereum and other EVM systems."),(0,i.kt)("h3",{id:"astar"},"Astar"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://astar.network"},"Astar Network")," and its sister network\n",(0,i.kt)("a",{parentName:"p",href:"https://shiden.astar.network"},"Shiden Network"),' are the smart contract infrastructure in the Polkadot\nEcosystem. Astar Ecosystem ("Astar") supports NFTs developed with EVM smart contracts and WASM smart\ncontracts.'),(0,i.kt)("p",null,"Astar has all toolings available that every EVM NFT developer knows. The availability of those\ntoolings makes the onboarding to Astar networks very attractive to any developer looking to explore\nthe Polkadot Ecosystem. Astar has an active community of artists and NFT enthusiasts. Besides\nsupporting all EVM toolings, Astar also bootstrapped the WASM smart contract environment for NFT\ndevelopers writing smart contracts with ",(0,i.kt)("a",{parentName:"p",href:"https://use.ink"},"ink!")," based on\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/PSPs/blob/master/PSPs/psp-34.md"},"PSP34")," (Polkadot Standards Proposals)."),(0,i.kt)("p",null,"The main advantage of having a multi-virtual machine environment for NFT developers is that it will\ngive more possibilities to the builders for the use case they are developing. With the support of\nWASM smart contracts, developers can develop solutions like ",(0,i.kt)("a",{parentName:"p",href:"./learn-nft#rmrk"},"RMRK")," with smart\ncontracts."),(0,i.kt)("h3",{id:"moonbeam"},"Moonbeam"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://moonbeam.network"},"Moonbeam")," and its Kusama counterpart Moonriver are full EVM deployments\nwith Ethereum RPC endpoints."),(0,i.kt)("p",null,"This means that the entire toolkit offered to other EVM chains (stacks like Hardhat, Remix, Truffle,\nMetamask, etc.) are available to Moonriver / Moonbeam users and developers, giving it a noticeable\nhead start in attracting existing userbases."),(0,i.kt)("p",null,"Several dozen high profile teams are launching their products (or re-launching) on Moonriver /\nMoonbeam, however, it is essential to note that Moonbeam is an EVM chain and will therefore suffer\nfrom the same limitations as any other EVM chain in regards to customization and feature-richness of\nNFTs."),(0,i.kt)("p",null,"A notable advantage, however, is that Moonriver / Moonbeam is still a Substrate chain, meaning\nintegration of custom pallets into the runtime is still possible, making NFT specific optimizations\nat the chain runtime level a reliable way to keep EVM compatibility of tools while at the same time\noptimizing storage and interactions for rich NFTs."),(0,i.kt)("h3",{id:"uniques"},"Uniques"),(0,i.kt)("p",null,"Uniques is a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/tree/master/frame/uniques"},"FRAME pallet"),"\ndeployed on the Statemint common good parachain. It implements the most basic kind of NFT - a data\nrecord referencing some metadata. This metadata reference is mutable until frozen, so NFTs and their\nclasses (entities derived from) are mutable unless specifically made immutable by the issuer."),(0,i.kt)("p",null,"Uniques takes a very bare-bones approach on purpose, to keep the Statemint chain a simple\nbalance-keeping chain for both fungible and non-fungibles."),(0,i.kt)("p",null,"Uniques NFTs can be viewed and interacted with on\n",(0,i.kt)("a",{parentName:"p",href:"https://singular.rmrk.app"},"RMRK's Singular platform"),", by switching the top right menu from Kusama\nto Statemine."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4343).Z,width:"2110",height:"617"})),(0,i.kt)("p",null,"The can also be interacted with directly through the\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-statemine-rpc.paritytech.net#/extrinsics"},"extrinsics tab of Statemine"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4721).Z,width:"997",height:"608"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"More UIs are already being developed"),"."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"bridging"},"Bridging"),(0,i.kt)("p",null,"Bridging to and from Substrate chains and EVM chains takes much effort but is a highly desired\nfeature in the NFT industry. Merging the collector and customer base has significant implications,\nso multiple projects focus on making this possible."),(0,i.kt)("p",null,"Apart from RMRK (Substrate-to-Substrate seamless teleportation natively with ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-xcm"},"XCMP"),")\nand Efinity (Paratoken), the following efforts are underway:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"MyNFT"),": an EVM to EVM bridging effort."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RMRK <-> EVM")," Simplification bridge: a bridge developed during the\n",(0,i.kt)("a",{parentName:"li",href:"https://rmrk.devpost.com"},"RMRK hackathon")," for porting RMRK NFTs into simplified IOUs on EVM\nchains, primary deployment pending November 2022 on Moonriver"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RMRK <-> EVM")," Full bridge: EVM version of RMRK 2.0 should be ready in December 2021, meaning a\nfull migration of RMRK 2.0 NFTs from RMRK (Kusama) to Moonriver (and other EVMs) will become\npossible")),(0,i.kt)("h3",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[1]",": ",(0,i.kt)("a",{parentName:"li",href:"https://www.investopedia.com/terms/l/liars-poker.asp"},"Investopedia")),(0,i.kt)("li",{parentName:"ul"},"[2]",":\n",(0,i.kt)("a",{parentName:"li",href:"https://unique.network/blog/chelobricks-making-waves-with-10-000-substrate-based-nfts/"},"Unique Network's Chelobrick"))))}u.isMDXComponent=!0},9379:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kanaria-55b0060679c6303db0fc91f5c402ba02.png"},4343:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nft-statemine-48ec78c3fcc8199d7d9164959424d5e3.png"},8101:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/samurai-830479330323f7feeae0b981479ad9cc.png"},4721:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/uniques-cd3bd4a76bd57ef0e79de4a0b36aa237.png"}}]);