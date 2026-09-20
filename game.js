'use strict';
const $=s=>document.querySelector(s),canvas=$('#game'),ctx=canvas.getContext('2d');ctx.imageSmoothingEnabled=false;
const W=1175,H=500,G=426,B=320,L=3520,T=32,FINISH=L-160;
const artists=[
  {
    "name": "Kendrick",
    "city": "COMPTON",
    "sky": "#a8d5ec",
    "far": "#708f98",
    "walls": [
      "#b68a68",
      "#ddbc93",
      "#729475",
      "#b68a68"
    ],
    "accent": "#729475",
    "color": "#eeeecc",
    "pants": "#4167a3",
    "skin": "#855337",
    "hair": "#201b18",
    "style": "braids",
    "power": "pulse",
    "victory": "West Coast victory stomp",
    "song": "HUMBLE.",
    "award": "2018 · Best Rap Song",
    "source": "https://www.grammy.com/news/kendrick-lamar-grammy-timeline-wins-nominations-performances",
    "levels": [
      "Rosecrans Run",
      "Corner Market",
      "Palm Court",
      "Record Row",
      "Concrete Garden",
      "Underpass Echo",
      "Blue Hour",
      "Rooftop Rhythm",
      "Westside Steps",
      "Compton Main Stage"
    ],
    "bpm": 94,
    "notes": [
      65.41,
      77.79,
      98.0,
      87.31,
      65.41,
      116.55,
      98.0,
      77.79
    ]
  },
  {
    "name": "Travis",
    "city": "HOUSTON",
    "sky": "#292441",
    "far": "#524762",
    "walls": [
      "#735573",
      "#af8a98",
      "#e99d65",
      "#735573"
    ],
    "accent": "#e99d65",
    "color": "#814c36",
    "pants": "#333139",
    "skin": "#895436",
    "hair": "#201819",
    "style": "braids",
    "power": "moon",
    "victory": "Astro launch & rage bounce",
    "song": "goosebumps",
    "award": "Fan-selected song · no award claim",
    "source": "",
    "levels": [
      "Space City",
      "Neon Corner",
      "Night Market",
      "Orbit Alley",
      "Astro Arcade",
      "Moonwalk Roofs",
      "Purple Underpass",
      "Rocket Yard",
      "Stargazer Steps",
      "Houston Launchpad"
    ],
    "bpm": 140,
    "notes": [
      69.3,
      82.41,
      103.83,
      92.5,
      69.3,
      123.48,
      103.83,
      82.41
    ]
  },
  {
    "name": "Drake",
    "city": "TORONTO",
    "sky": "#a1b8d5",
    "far": "#758fa9",
    "walls": [
      "#7c8298",
      "#b9bcc9",
      "#c5e8ed",
      "#7c8298"
    ],
    "accent": "#c5e8ed",
    "color": "#202a3a",
    "pants": "#676b80",
    "skin": "#ba8664",
    "hair": "#24201d",
    "style": "beard",
    "power": "double",
    "victory": "Anita Max Wynn jump celebration",
    "song": "God’s Plan",
    "award": "2019 · Best Rap Song",
    "source": "https://www.grammy.com/news/drake-wins-best-rap-song-gods-plan-2019-grammys/",
    "levels": [
      "The Six",
      "Queen Street",
      "Northside Records",
      "Lakefront Run",
      "CN Skyline",
      "Snowlight Lane",
      "Blue Line Tunnel",
      "Owl Rooftops",
      "Northern Heights",
      "Toronto Max Win"
    ],
    "bpm": 104,
    "notes": [
      73.42,
      87.31,
      110.01,
      98.0,
      73.42,
      130.82,
      110.01,
      87.31
    ]
  },
  {
    "name": "Tyler",
    "city": "LOS ANGELES",
    "sky": "#f2cbaa",
    "far": "#b9bd9b",
    "walls": [
      "#e2aa9c",
      "#e1c77e",
      "#80a77e",
      "#e2aa9c"
    ],
    "accent": "#80a77e",
    "color": "#95b778",
    "pants": "#896444",
    "skin": "#885135",
    "hair": "#eee0ac",
    "style": "cap",
    "power": "garden",
    "victory": "Flower spin & skate celebration",
    "song": "IGOR",
    "award": "2020 · Best Rap Album",
    "source": "https://www.grammy.com/news/tyler-creator-wins-best-rap-album-igor-2020-grammys/",
    "levels": [
      "Flower District",
      "Color Court",
      "Record Garden",
      "Pastel Park",
      "Golf Green",
      "Bloom Tunnel",
      "Cherry Roofs",
      "Skate Plaza",
      "Sunflower Steps",
      "Creator Carnival"
    ],
    "bpm": 112,
    "notes": [
      77.79,
      92.5,
      116.55,
      103.83,
      77.79,
      138.6,
      116.55,
      92.5
    ]
  },
  {
    "name": "Eminem",
    "city": "DETROIT",
    "sky": "#bac8cc",
    "far": "#7c8b94",
    "walls": [
      "#a38879",
      "#bdb6a6",
      "#b95046",
      "#a38879"
    ],
    "accent": "#b95046",
    "color": "#ededdf",
    "pants": "#323947",
    "skin": "#d5ac8c",
    "hair": "#d7c270",
    "style": "crop",
    "power": "rapid",
    "victory": "Mic drop & battle stance",
    "song": "Lose Yourself",
    "award": "2004 · Best Rap Song",
    "source": "https://www.grammy.com/artists/eminem/8580/",
    "levels": [
      "Eight Mile",
      "Factory Row",
      "Battle Basement",
      "Rail Yard",
      "Motor City",
      "Assembly Tunnel",
      "Steel Roofs",
      "Cass Corridor",
      "Concrete Climb",
      "Detroit Mic Check"
    ],
    "bpm": 100,
    "notes": [
      82.41,
      98.0,
      123.48,
      110.01,
      82.41,
      146.84,
      123.48,
      98.0
    ]
  },
  {
    "name": "Kanye",
    "city": "CHICAGO",
    "sky": "#e0bca1",
    "far": "#928899",
    "walls": [
      "#a58379",
      "#c8b698",
      "#ca554e",
      "#a58379"
    ],
    "accent": "#ca554e",
    "color": "#ab554e",
    "pants": "#403e47",
    "skin": "#986442",
    "hair": "#22201f",
    "style": "shades",
    "power": "dash",
    "victory": "Graduation leap & spotlight pose",
    "song": "Stronger",
    "award": "2008 · Best Rap Solo Performance",
    "source": "https://www.grammy.com/awards/categories/best-rap-solo-performance/2008/",
    "levels": [
      "Southside Start",
      "Soul Sample Street",
      "Elevated Tracks",
      "Brick Campus",
      "Windy City",
      "808 Tunnel",
      "Graduation Roofs",
      "Skyline Studio",
      "Stronger Steps",
      "Chicago Spotlight"
    ],
    "bpm": 108,
    "notes": [
      65.41,
      77.79,
      98.0,
      87.31,
      65.41,
      116.55,
      98.0,
      77.79
    ]
  },
  {
    "name": "Jay-Z",
    "city": "BROOKLYN",
    "sky": "#b7cde0",
    "far": "#7a889c",
    "walls": [
      "#97766b",
      "#b8a38b",
      "#bb9656",
      "#97766b"
    ],
    "accent": "#bb9656",
    "color": "#1f2634",
    "pants": "#444f61",
    "skin": "#8c593c",
    "hair": "#27211f",
    "style": "cap",
    "power": "magnet",
    "victory": "Diamond hands & skyline salute",
    "song": "99 Problems",
    "award": "2005 · Best Rap Solo Performance",
    "source": "https://www.grammy.com/awards/categories/best-rap-solo-performance/2008/",
    "levels": [
      "Marcy Morning",
      "Brownstone Row",
      "Brooklyn Bridge",
      "Record Exchange",
      "Empire Avenue",
      "Subway Cipher",
      "Roc Rooftops",
      "Skyline Hustle",
      "Blueprint Steps",
      "Brooklyn Diamond"
    ],
    "bpm": 96,
    "notes": [
      69.3,
      82.41,
      103.83,
      92.5,
      69.3,
      123.48,
      103.83,
      82.41
    ]
  },
  {
    "name": "Nas",
    "city": "QUEENS",
    "sky": "#c4c3bb",
    "far": "#828b88",
    "walls": [
      "#ac8c74",
      "#c4b391",
      "#bfa367",
      "#ac8c74"
    ],
    "accent": "#bfa367",
    "color": "#b38d55",
    "pants": "#343c45",
    "skin": "#946041",
    "hair": "#27211c",
    "style": "cap",
    "power": "freeze",
    "victory": "Crown rise & Queens salute",
    "song": "King’s Disease",
    "award": "2021 · Best Rap Album",
    "source": "https://www.grammy.com/awards/categories/best-rap-album/2021/",
    "levels": [
      "Queensbridge",
      "Memory Lane",
      "Poet Court",
      "Vinyl Market",
      "Bridge View",
      "Story Tunnel",
      "Golden Roofs",
      "Kings Avenue",
      "Royal Steps",
      "Queens Coronation"
    ],
    "bpm": 92,
    "notes": [
      73.42,
      87.31,
      110.01,
      98.0,
      73.42,
      130.82,
      110.01,
      87.31
    ]
  },
  {
    "name": "J. Cole",
    "city": "FAYETTEVILLE",
    "sky": "#b9d5ba",
    "far": "#78978b",
    "walls": [
      "#a8987b",
      "#d0bb92",
      "#658c61",
      "#a8987b"
    ],
    "accent": "#658c61",
    "color": "#e0d9bd",
    "pants": "#374a4d",
    "skin": "#96633f",
    "hair": "#30241d",
    "style": "locs",
    "power": "stomp",
    "victory": "Dreamville layup & landing",
    "song": "a lot",
    "award": "2020 · Best Rap Song · 21 Savage feat. J. Cole",
    "source": "https://www.grammy.com/news/21-savage-featuring-j-cole-wins-best-rap-song-lot-2020-grammys/",
    "levels": [
      "Forest Hills",
      "Dream Court",
      "Carolina Corner",
      "Pine Street",
      "Backyard Hoops",
      "Dream Tunnel",
      "Forest Roofs",
      "Homecoming",
      "Dreamer Steps",
      "Fayetteville Finals"
    ],
    "bpm": 90,
    "notes": [
      77.79,
      92.5,
      116.55,
      103.83,
      77.79,
      138.6,
      116.55,
      92.5
    ]
  },
  {
    "name": "Future",
    "city": "ATLANTA",
    "sky": "#776a98",
    "far": "#4e526f",
    "walls": [
      "#797185",
      "#a495af",
      "#aaa6eb",
      "#797185"
    ],
    "accent": "#aaa6eb",
    "color": "#77717e",
    "pants": "#262b3c",
    "skin": "#95613e",
    "hair": "#c6ad76",
    "style": "locs",
    "power": "pierce",
    "victory": "Pluto orbit & floating salute",
    "song": "WAIT FOR U",
    "award": "2023 · Best Melodic Rap Performance · with Drake & Tems",
    "source": "https://www.grammy.com/artists/future/19716/",
    "levels": [
      "Pluto Landing",
      "Zone Six",
      "Violet Market",
      "Neon Heights",
      "Space Boulevard",
      "Pluto Tunnel",
      "Moonlit Roofs",
      "Orbit Exchange",
      "Purple Steps",
      "Atlanta Orbit"
    ],
    "bpm": 138,
    "notes": [
      82.41,
      98.0,
      123.48,
      110.01,
      82.41,
      146.84,
      123.48,
      98.0
    ]
  },
  {
    "name": "21 Savage",
    "city": "ATLANTA",
    "sky": "#9daec3",
    "far": "#677c8c",
    "walls": [
      "#80808a",
      "#b0a5a1",
      "#c05454",
      "#80808a"
    ],
    "accent": "#c05454",
    "color": "#303039",
    "pants": "#52535d",
    "skin": "#895536",
    "hair": "#251b19",
    "style": "crop",
    "power": "triple",
    "victory": "Three-count stomp & salute",
    "song": "a lot",
    "award": "2020 · Best Rap Song · feat. J. Cole",
    "source": "https://www.grammy.com/news/21-savage-featuring-j-cole-wins-best-rap-song-lot-2020-grammys/",
    "levels": [
      "East Atlanta",
      "Twenty One Court",
      "Redline Records",
      "Concrete Circle",
      "Nightfall Market",
      "Echo Tunnel",
      "Steel Skyline",
      "Zone Six Heights",
      "Triple Steps",
      "Atlanta Encore"
    ],
    "bpm": 134,
    "notes": [
      65.41,
      77.79,
      98.0,
      87.31,
      65.41,
      116.55,
      98.0,
      77.79
    ]
  },
  {
    "name": "Lil Wayne",
    "city": "NEW ORLEANS",
    "sky": "#bcc9df",
    "far": "#8594b0",
    "walls": [
      "#9d86a7",
      "#c4b18a",
      "#b29b56",
      "#9d86a7"
    ],
    "accent": "#b29b56",
    "color": "#e6ded3",
    "pants": "#7c5489",
    "skin": "#966443",
    "hair": "#2d211d",
    "style": "locs",
    "power": "skate",
    "victory": "Skateboard kickflip & mic lift",
    "song": "A Milli",
    "award": "2009 · Best Rap Solo Performance",
    "source": "https://www.grammy.com/awards/categories/best-rap-solo-performance/2009/",
    "levels": [
      "Hollygrove",
      "Brass Corner",
      "Carter Court",
      "Balcony Run",
      "Crescent City",
      "Jazz Tunnel",
      "Mardi Roofs",
      "Skate Quarter",
      "Million Steps",
      "New Orleans Encore"
    ],
    "bpm": 110,
    "notes": [
      69.3,
      82.41,
      103.83,
      92.5,
      69.3,
      123.48,
      103.83,
      82.41
    ]
  },
  {
    "name": "Nicki Minaj",
    "city": "QUEENS",
    "sky": "#ecc5df",
    "far": "#aa85a8",
    "walls": [
      "#cf9ac0",
      "#e7b6d1",
      "#df65a7",
      "#cf9ac0"
    ],
    "accent": "#df65a7",
    "color": "#eb68b3",
    "pants": "#7761b1",
    "skin": "#bb845c",
    "hair": "#efb6d9",
    "style": "long",
    "power": "bubble",
    "victory": "Pink runway twirl & royal wave",
    "song": "Super Bass",
    "award": "Fan-selected song · no award claim",
    "source": "",
    "levels": [
      "Pink Arrival",
      "Queens Couture",
      "Bass Boutique",
      "Neon Runway",
      "Pink Palace",
      "Bubble Tunnel",
      "Candy Roofs",
      "Royal Boulevard",
      "Crown Steps",
      "Queens Pink Finale"
    ],
    "bpm": 118,
    "notes": [
      73.42,
      87.31,
      110.01,
      98.0,
      73.42,
      130.82,
      110.01,
      87.31
    ]
  },
  {
    "name": "Cardi B",
    "city": "THE BRONX",
    "sky": "#dbb3a0",
    "far": "#9c7b7b",
    "walls": [
      "#b8746e",
      "#d4b494",
      "#bc534d",
      "#b8746e"
    ],
    "accent": "#bc534d",
    "color": "#d64b49",
    "pants": "#3c343d",
    "skin": "#b77d59",
    "hair": "#262125",
    "style": "long",
    "power": "sonic",
    "victory": "Bronx strut & confetti kick",
    "song": "Invasion of Privacy",
    "award": "2019 · Best Rap Album",
    "source": "https://www.grammy.com/news/cardi-b-wins-best-rap-album-invasion-privacy-2019-grammys/",
    "levels": [
      "Bronx Start",
      "Bodega Bounce",
      "Red Carpet",
      "Uptown Records",
      "Highbridge",
      "Bass Tunnel",
      "Bronx Rooftops",
      "Spotlight Street",
      "Victory Steps",
      "Bronx Takeover"
    ],
    "bpm": 105,
    "notes": [
      77.79,
      92.5,
      116.55,
      103.83,
      77.79,
      138.6,
      116.55,
      92.5
    ]
  },
  {
    "name": "Snoop Dogg",
    "city": "LONG BEACH",
    "sky": "#b4d6e4",
    "far": "#799ca2",
    "walls": [
      "#a58b74",
      "#c9b695",
      "#6094b1",
      "#a58b74"
    ],
    "accent": "#6094b1",
    "color": "#4279ab",
    "pants": "#445476",
    "skin": "#92663f",
    "hair": "#24201c",
    "style": "braids",
    "power": "glide",
    "victory": "Long Beach two-step & lean",
    "song": "Gin and Juice",
    "award": "Fan-selected song · no award claim",
    "source": "",
    "levels": [
      "Long Beach",
      "Ocean Boulevard",
      "Blue Court",
      "Lowrider Lane",
      "Pacific Records",
      "Coast Tunnel",
      "Palm Rooftops",
      "Sunset Strip",
      "Coastal Steps",
      "Long Beach Two Step"
    ],
    "bpm": 92,
    "notes": [
      82.41,
      98.0,
      123.48,
      110.01,
      82.41,
      146.84,
      123.48,
      98.0
    ]
  },
  {
    "name": "Doja Cat",
    "city": "LOS ANGELES",
    "sky": "#dabbea",
    "far": "#9581ad",
    "walls": [
      "#b28db5",
      "#dbb6cc",
      "#8c64ad",
      "#b28db5"
    ],
    "accent": "#8c64ad",
    "color": "#b276ca",
    "pants": "#4e3d66",
    "skin": "#bd876b",
    "hair": "#e9d9bc",
    "style": "ears",
    "power": "blink",
    "victory": "Catwalk leap & moon spin",
    "song": "Kiss Me More",
    "award": "2022 · Best Pop Duo/Group Performance · with SZA",
    "source": "https://www.grammy.com/news/sza-doja-cat-kiss-me-more-2022-grammys-win-speech-video-rewind/",
    "levels": [
      "Planet Arrival",
      "Catwalk Court",
      "Neon Arcade",
      "Pink Orbit",
      "Moon Market",
      "Cosmic Tunnel",
      "Galaxy Roofs",
      "Starlight Avenue",
      "Planet Steps",
      "Planet Her Finale"
    ],
    "bpm": 116,
    "notes": [
      65.41,
      77.79,
      98.0,
      87.31,
      65.41,
      116.55,
      98.0,
      77.79
    ]
  }
];
const powers={"pulse": {"name": "Poet’s Pulse", "help": "X: clear nearby enemies with a shockwave."}, "moon": {"name": "Astro Boots", "help": "Low-gravity jumps. X: launch upward."}, "double": {"name": "Owl Wings", "help": "Jump again in midair. X: bounce upward."}, "garden": {"name": "Flower Step", "help": "X: grow a temporary platform under you."}, "rapid": {"name": "Rap Fire", "help": "X: fire a rapid burst of beat notes."}, "dash": {"name": "Stronger Shield", "help": "X: dash through enemies with protection."}, "magnet": {"name": "Blueprint Magnet", "help": "Attract nearby gold. X: pull a wider circle."}, "freeze": {"name": "Time Capsule", "help": "X: freeze enemies for four seconds."}, "stomp": {"name": "Dream Dunk", "help": "X in the air: slam down with a shockwave."}, "pierce": {"name": "Pluto Beam", "help": "X: send a piercing beam through enemies."}, "triple": {"name": "Triple Echo", "help": "X: launch a three-way spread of notes."}, "skate": {"name": "Carter Board", "help": "Faster running. X: leap with your board."}, "bubble": {"name": "Pink Shield", "help": "Absorb a hit. X: renew a brief shield."}, "sonic": {"name": "Bronx Bass", "help": "X: send a rolling bass wave down the block."}, "glide": {"name": "Coast Glide", "help": "Hold jump to float while falling. X: rise."}, "blink": {"name": "Planet Blink", "help": "X: blink forward through obstacles safely."}};
let chosen=0,level=1,mode='ready',sound=false,audio,player,camera=0,frame=0,last=0,score=0,coinTotal=0,lives=3,elapsed=0,timer=300,inv=0,hit=0,keys={},coins=[],blocks=[],enemies=[],items=[],shots=[],particles=[],gaps=[],jumpBuffer=0,coyote=0,powerTime=0,cooldown=0,shield=0,freeze=0,stomping=false,cutTime=0,checkpoint=70,lastExtra=0,tracks=Array(artists.length).fill(null);
let progress=artists.map(()=>({unlocked:1,complete:false}));try{const saved=JSON.parse(localStorage.getItem('rappers-run-tour-v1'));if(Array.isArray(saved))progress=artists.map((a,i)=>({unlocked:Math.max(1,Math.min(10,Number(saved[i]?.unlocked)||1)),complete:saved[i]?.complete===true}))}catch{}
const songPlayer=new Audio();songPlayer.loop=true;songPlayer.volume=.6;
function save(){try{localStorage.setItem('rappers-run-tour-v1',JSON.stringify(progress))}catch{$('#save-note').textContent='Saving is unavailable. Progress will last for this session.'}}
function rng(seed){return()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296}}
function isGap(x,margin=0){return gaps.some(g=>x>g[0]-margin&&x<g[1]+margin)}
function generate(){coins=[];blocks=[];enemies=[];items=[];shots=[];particles=[];gaps=[];const rand=rng((chosen+1)*9709+level*379),add=(x,y,w,h,type='brick',extra={})=>blocks.push({x,y,w,h,type,...extra});
const gapCount=level<3?2:3;for(let n=0;n<gapCount;n++){let x=1030+n*820+Math.floor(rand()*100);gaps.push([x,x+94+level*4+Math.floor(rand()*22)])}
add(240,G-112,32,32,'question',{content:'grow'});add(272,G-112,32,32);add(440,G-128,32,32,'power',{content:artists[chosen].power,owner:chosen});
for(let n=1;n<10;n++){let x=n*B+120+Math.floor(rand()*2)*32,y=G-112-((n+level+chosen)%3)*32;let count=2+Math.floor(rand()*3);for(let j=0;j<count;j++)add(x+j*T,y,T,T,j===1&&n%3===0?'question':'brick',{content:'coin'});for(let j=0;j<count;j++)coins.push({x:x+j*T+16,y:y-22,got:false});let cx=n*B+30;if(!isGap(cx,24))coins.push({x:cx,y:G-32,got:false});
if(n>1&&n<9&&n%3===(level+chosen)%3){let px=n*B+225,ph=48+((level+n)%3)*16;if(!isGap(px,90))add(px,G-ph,64,ph,'pipe')}
if(n>1&&n<9){let ex=n*B+50;if(!isGap(ex,70))enemies.push({x:ex,y:G-28,w:30,h:28,vx:-(.7+level*.035),vy:0,start:ex,type:n%4===0?'shell':n%4===1&&level>3?'hopper':n%5===0&&level>5?'spike':'walker',dead:false,hp:1,rest:0})}
if(level>=4&&n%3===0)add(n*B+20,G-188,100,16,'moving',{baseX:n*B+20,phase:n,speed:.015+level*.001});}
for(let g of gaps){add(g[0]-90,G-100,64,16,'ledge');for(let j=0;j<4;j++)coins.push({x:g[0]-10+j*36,y:G-85-Math.sin(j/3*Math.PI)*55,got:false})}
for(let n=0;n<5;n++)for(let j=0;j<=n;j++)add(L-550+n*T,G-(j+1)*T,T,T,'stone');
if(level===10)enemies.push({x:L-740,y:G-64,w:58,h:64,vx:-1.2,vy:0,start:L-740,type:'boss',dead:false,hp:3,rest:0});
}
function spawn(){player={x:70,y:G-40,prevX:70,prevY:G-40,land:0,w:28,h:40,vx:0,vy:0,on:true,facing:1,anim:0,state:'idle',big:false,airJump:false,duck:false};camera=0;previousCamera=0;inv=0;hit=0;powerTime=0;cooldown=0;shield=0;freeze=0;stomping=false;keys={};jumpBuffer=0;coyote=5;timer=300;checkpoint=70;generate()}
function reset(){score=0;coinTotal=0;lives=3;elapsed=0;lastExtra=0;spawn()}
function active(){return powerTime>0}function currentPower(){return active()?artists[chosen].power:''}
function grow(){if(player.big)return;player.big=true;const tall={...player,x:player.x-2,y:player.y-16,w:32,h:56};player.x=tall.x;player.w=32;if(blocks.some(b=>!b.dead&&overlap(tall,b))){player.duck=true;player.y+=2;player.h=38}else{player.y-=16;player.h=56}player.prevY=player.y;player.prevX=player.x;tone(600,.18)}
function earn(n=1){score+=n;coinTotal+=n;let bonus=Math.floor(coinTotal/100);if(bonus>lastExtra){lives+=bonus-lastExtra;lastExtra=bonus;tone(1100,.25)}}
function show(t,m,b){$('#title').textContent=t;$('#message').textContent=m;$('#play').textContent=b;$('#overlay').classList.remove('hidden')}
function updateMap(){let map=$('#level-map');map.innerHTML='';artists[chosen].levels.forEach((name,i)=>{let b=document.createElement('button');b.className='level-btn'+(level===i+1?' current':'');b.disabled=i+1>progress[chosen].unlocked;b.setAttribute('aria-label',`Level ${i+1}: ${name}${b.disabled?', locked':''}`);b.innerHTML=`<strong>${i+1<progress[chosen].unlocked||progress[chosen].complete?'✓':String(i+1).padStart(2,'0')}</strong><span>${name}</span>`;b.onclick=()=>{level=i+1;reset();mode='ready';intro();syncMusic()};map.appendChild(b)});$('#campaign-title').textContent=artists[chosen].name.toUpperCase()+'’S 10-LEVEL TOUR';$('#trophy-room').disabled=!progress[chosen].complete;$('#trophy-room').textContent=progress[chosen].complete?'VIEW TROPHY ★':'TROPHY LOCKED';$('#level-title').textContent=`${chosen+1}–${level} · ${artists[chosen].levels[level-1].toUpperCase()}`;$('#location').textContent=artists[chosen].name.toUpperCase()+' / '+artists[chosen].city;$('#power-name').textContent=powers[artists[chosen].power].name;$('#power-help').textContent=powers[artists[chosen].power].help}
function intro(){ $('#reward').classList.add('hidden');show(artists[chosen].name.toUpperCase()+'’S WORLD.',`Level ${level}: ${artists[chosen].levels[level-1]}. Find the ★ block for ${powers[artists[chosen].power].name}. Reach the flag.`,`START LEVEL ${level} →`);updateMap()}
function select(i){chosen=i;level=progress[i].unlocked;reset();mode='ready';document.querySelectorAll('.skin').forEach((b,j)=>{b.classList.toggle('active',j===i);b.setAttribute('aria-pressed',j===i)});intro();syncMusic()}
function begin(){if(mode==='next'){level++;spawn()}else if(mode==='over'){lives=3;spawn()}mode='playing';keys={};$('#overlay').classList.add('hidden');$('#reward').classList.add('hidden');$('#pause').textContent='Ⅱ PAUSE';updateMap();syncMusic()}
function pause(){if(mode==='playing'){mode='paused';keys={};show('PAUSED.',`${artists[chosen].levels[level-1]} · Your progress is safe.`,'RESUME →');$('#pause').textContent='▶ RESUME'}else if(mode==='paused')begin();syncMusic()}
function completeLevel(){if(mode!=='playing')return;keys={};mode='flag';cutTime=0;player.vx=0;player.vy=0;score+=Math.floor(timer);if(level<10)progress[chosen].unlocked=Math.max(progress[chosen].unlocked,level+1);else progress[chosen].complete=true;save();updateMap();syncMusic();tone(660,.25)}
function musicLabel(){let t=tracks[chosen];$('#music-title').textContent=artists[chosen].name+' · '+(t?t.name:'Original arcade beat');$('#music-note').textContent=t?'This song is assigned to this artist for this session.':'Add your own song file for this artist. Built-in music is original.'}
function syncMusic(){songPlayer.pause();if(tracks[chosen]){if(songPlayer.getAttribute('src')!==tracks[chosen].url)songPlayer.src=tracks[chosen].url;if(sound&&mode==='playing')songPlayer.play().catch(()=>{$('#music-note').textContent='This file could not play. Try an MP3, WAV, or M4A.'})}musicLabel()}
function tone(freq,d=.09,type='triangle',vol=.04){if(!sound)return;audio??=new(window.AudioContext||window.webkitAudioContext)();audio.resume();let o=audio.createOscillator(),g=audio.createGain();o.type=type;o.frequency.setValueAtTime(freq,audio.currentTime);g.gain.setValueAtTime(vol,audio.currentTime);g.gain.exponentialRampToValueAtTime(.001,audio.currentTime+d);o.connect(g);g.connect(audio.destination);o.start();o.stop(audio.currentTime+d)}
let beatTime=0,beatStep=0;function beat(dt){if(!sound||tracks[chosen])return;beatTime-=dt/60;if(beatTime>0)return;beatTime+=60/artists[chosen].bpm/4;let s=beatStep++%16,a=artists[chosen];if(s%4===0)tone(s%8===0?55:170,.12,s%8===0?'sine':'triangle',.09);tone(4600+s*90,.02,'square',.004);if(s%2===0)tone(a.notes[s/2],.17,'sine',.09);if(s%4===2)tone(a.notes[(s+chosen)%8]*4,.16,'triangle',.025)}
function burst(x,y,c,n=10){for(let i=0;i<n;i++)particles.push({x,y,vx:(Math.random()-.5)*6,vy:-Math.random()*6,t:30,c})}
function kill(e){if(e.dead)return;e.hp--;if(e.hp<=0){e.dead=true;score+=e.type==='boss'?500:100;burst(e.x+15,e.y,'#edcb69')}else{e.rest=40;e.vx*=-1;burst(e.x,e.y,'#fff')}}
function pulse(radius){for(let e of enemies)if(!e.dead&&Math.hypot(e.x-player.x,e.y-player.y)<radius)kill(e);burst(player.x,player.y,artists[chosen].accent,22)}
function collectPower(item){if(item.owner!==chosen)return false;grow();powerTime=1200;shield=artists[chosen].power==='bubble'?600:0;items=items.filter(i=>i!==item);tone(880,.22);burst(player.x,player.y,artists[chosen].accent);return true}
function usePower(){if(mode!=='playing'||!active()||cooldown>0||hit)return;const p=currentPower();cooldown=45;let shoot=(vx,vy=0,pierce=false,r=8)=>shots.push({x:player.x+player.w/2,y:player.y+player.h/2,w:r*2,h:r*2,vx,vy,t:100,pierce,color:artists[chosen].accent});
switch(p){case'pulse':pulse(185);cooldown=100;break;case'moon':player.vy=-11;player.on=false;cooldown=100;break;case'double':player.vy=-11;player.on=false;player.airJump=true;cooldown=90;break;case'garden':blocks.push({x:player.x-24,y:player.y+player.h+8,w:100,h:16,type:'flower',ttl:230});player.vy=-8;cooldown=100;break;case'rapid':for(let n=0;n<3;n++){shoot(player.facing*(8+n),0);shots[shots.length-1].x+=player.facing*n*16}cooldown=24;break;case'dash':player.vx=player.facing*12;shield=40;hit=20;cooldown=100;break;case'magnet':for(let c of coins)if(!c.got&&Math.abs(c.x-player.x)<380){c.got=true;earn()}cooldown=100;break;case'freeze':freeze=240;cooldown=300;break;case'stomp':if(!player.on){player.vy=18;stomping=true;shield=50}else pulse(170);cooldown=65;break;case'pierce':shoot(player.facing*10,0,true,9);cooldown=55;break;case'triple':for(let vy of [-2.5,0,2.5])shoot(player.facing*8,vy);cooldown=55;break;case'skate':player.vx=player.facing*8;player.vy=-11;player.on=false;cooldown=75;break;case'bubble':shield=150;cooldown=240;break;case'sonic':shoot(player.facing*7,0,true,18);shots[shots.length-1].y=G-36;cooldown=90;break;case'glide':player.vy=-7;player.on=false;cooldown=90;break;case'blink':{let dest=Math.min(FINISH-80,Math.max(0,player.x+player.facing*150));if(!isGap(dest+player.w/2)&&!blocks.some(b=>!b.dead&&dest<b.x+b.w&&dest+player.w>b.x&&player.y<b.y+b.h&&player.y+player.h>b.y)){burst(player.x,player.y,artists[chosen].accent);player.x=dest;player.prevX=dest;shield=25}else cooldown=10;break}}
tone(500+chosen*17,.12)}
function hurt(fell=false){if(mode!=='playing'||(!fell&&(inv>0||shield>0)))return;if(!fell&&player.big){player.big=false;player.y+=player.h-40;player.h=40;player.x+=2;player.w=28;player.duck=false;player.prevY=player.y;powerTime=0;shield=0;inv=110;hit=15;player.vx=-player.facing*3;player.vy=-5;stomping=false;tone(120,.2);return}lives--;tone(90,.3,'sawtooth');keys={};if(lives<=0){mode='over';show('RUN IT BACK.',`${artists[chosen].name} · Level ${level} · Score ${score}`,'RETRY THIS LEVEL →');syncMusic()}else{spawn();inv=100;updateMap()}}
function overlap(a,b){return a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y}
function bump(b){if(b.type==='question'||b.type==='power'){b.used=true;if(b.content==='coin'){earn();burst(b.x+16,b.y-20,'#f2cc58')}else items.push({x:b.x,y:b.y-28,w:26,h:26,vx:1.2,vy:-2,type:b.content,owner:b.owner});b.type='used';tone(500)}else if(b.type==='brick'&&player.big){b.dead=true;burst(b.x,b.y,'#b78866')}else tone(140,.04)}
function jump(){if(mode!=='playing')return;if(currentPower()==='double'&&!player.on&&!player.airJump){player.vy=-11;player.airJump=true;tone(600);return}jumpBuffer=8}
function release(k){keys[k]=false;if(['Space','ArrowUp','KeyW'].includes(k)&&player.vy<-5)player.vy=-5}
let previousCamera=0;
function approach(v,target,amount){return v<target?Math.min(target,v+amount):Math.max(target,v-amount)}
function inset(b,x=0,y=0){return {x:b.x+x,y:b.y+y,w:b.w-x*2,h:b.h-y*2}}
function groundSupport(x,w){const left=x+4,right=x+w-4;return !gaps.some(g=>left>=g[0]&&right<=g[1])}
function movePlayer(dt){
 const solid=blocks.filter(b=>!b.dead);const feet=player.y+player.h;let carry=0;
 for(const b of solid){if(b.ttl!==undefined){b.ttl-=dt;if(b.ttl<=0){b.dead=true;continue}}if(b.type==='moving'){const old=b.x;b.x=b.baseX+Math.sin(frame*b.speed+b.phase)*42;if(player.on&&Math.abs(feet-b.y)<1&&player.x+player.w>b.x&&player.x<b.x+b.w)carry=b.x-old}}
 let dx=player.vx*dt+carry,fromX=player.x,nextX=Math.max(0,Math.min(L-player.w,fromX+dx));
 for(const b of solid){if(b.dead||player.y+player.h<=b.y+.1||player.y>=b.y+b.h-.1)continue;
  if(dx>0&&fromX+player.w<=b.x+.1&&nextX+player.w>b.x)nextX=Math.min(nextX,b.x-player.w);
  if(dx<0&&fromX>=b.x+b.w-.1&&nextX<b.x+b.w)nextX=Math.max(nextX,b.x+b.w);
 }
 if(Math.abs(nextX-(fromX+dx))>.1)player.vx=0;player.x=nextX;
 const fromY=player.y,dy=player.vy*dt;let nextY=fromY+dy,headBlock=null;player.on=false;
 if(dy>=0){
  if(fromY+player.h<=G+.1&&nextY+player.h>=G&&groundSupport(player.x,player.w)){nextY=G-player.h;player.on=true}
  for(const b of solid){if(b.dead||player.x+player.w<=b.x+.1||player.x>=b.x+b.w-.1)continue;if(fromY+player.h<=b.y+.1&&nextY+player.h>=b.y){nextY=b.y-player.h;player.on=true}}
  if(player.on)player.vy=0;
 }else{
  for(const b of solid){if(b.dead||player.x+player.w<=b.x+.1||player.x>=b.x+b.w-.1)continue;if(fromY>=b.y+b.h-.1&&nextY<b.y+b.h){nextY=b.y+b.h;headBlock=b}}
  if(headBlock){player.vy=0;bump(headBlock)}
 }
 player.y=nextY;
}
function landingDust(){for(let n=0;n<5;n++)particles.push({x:player.x+player.w/2,y:player.y+player.h-2,vx:(n-2)*.55,vy:-.5-Math.random(),t:14,c:'#ece4cd99'})}
function update(dt){player.prevX=player.x;player.prevY=player.y;previousCamera=camera;player.land=Math.max(0,(player.land||0)-dt);elapsed+=dt/60;timer-=dt/60;if(timer<=0){hurt(true);return}inv=Math.max(0,inv-dt);hit=Math.max(0,hit-dt);powerTime=Math.max(0,powerTime-dt);shield=Math.max(0,shield-dt);cooldown=Math.max(0,cooldown-dt);freeze=Math.max(0,freeze-dt);jumpBuffer=Math.max(0,jumpBuffer-dt);coyote=player.on?7:Math.max(0,coyote-dt);let d=(keys.ArrowRight||keys.KeyD?1:0)-(keys.ArrowLeft||keys.KeyA?1:0),run=keys.ShiftLeft||keys.ShiftRight,hold=keys.Space||keys.ArrowUp||keys.KeyW,pow=currentPower(),max=(run?6.4:4.2)+(pow==='skate'?1.8:0),skid=d&&d*player.vx<-1;
let duck=!!((keys.ArrowDown||keys.KeyS)&&player.big&&player.on);if(player.duck&&!duck){let taller={...player,y:player.y-18,h:56};if(blocks.some(b=>!b.dead&&overlap(taller,b)))duck=true}let wanted=player.big?(duck?38:56):40;if(wanted!==player.h){player.y+=player.h-wanted;player.h=wanted}player.duck=duck;
if(!hit){if(d&&!duck){const accel=skid?.68:player.on?.34:.24;player.vx=approach(player.vx,d*max,accel*dt);player.facing=d}else if(player.on)player.vx=approach(player.vx,0,.3*dt)}
if(jumpBuffer&&coyote&&!hit&&!duck){player.vy=-11.8-(run?.4:0);player.on=false;coyote=0;jumpBuffer=0;tone(360,.1)}const wasOn=player.on,oldBottom=player.y+player.h;let gravity=(player.vy<0&&hold?.36:.68)*(pow==='moon'?.64:1);player.vy=Math.min(stomping?18:13,player.vy+gravity*dt);if(pow==='glide'&&hold&&player.vy>1.8)player.vy=1.8;
movePlayer(dt);
if(!wasOn&&player.on){player.land=7;if(Math.abs(player.vx)>1)landingDust()}
if(player.on){player.airJump=false;if(stomping){pulse(240);stomping=false}}
for(let c of coins)if(!c.got){if(pow==='magnet'&&Math.hypot(c.x-player.x,c.y-player.y)<160){c.x+=(player.x+14-c.x)*.15*dt;c.y+=(player.y+20-c.y)*.15*dt}if(Math.abs(player.x+14-c.x)<24&&Math.abs(player.y+player.h/2-c.y)<player.h/2+12){c.got=true;earn();tone(820,.06)}}
for(let item of [...items]){const ox=item.x,oy=item.y;item.vy=Math.min(10,item.vy+.45*dt);item.x+=item.vx*dt;
 for(const b of blocks)if(!b.dead&&overlap(item,b)){if(item.vx>0&&ox+item.w<=b.x+.1){item.x=b.x-item.w;item.vx=-Math.abs(item.vx)}else if(item.vx<0&&ox>=b.x+b.w-.1){item.x=b.x+b.w;item.vx=Math.abs(item.vx)}}
 item.y+=item.vy*dt;if(groundSupport(item.x,item.w)&&oy+item.h<=G+.1&&item.y+item.h>=G){item.y=G-item.h;item.vy=0}
 for(const b of blocks)if(!b.dead&&overlap(item,b)&&oy+item.h<=b.y+.1){item.y=b.y-item.h;item.vy=0}
 if(overlap(player,item)){if(item.type==='grow'){grow();items=items.filter(i=>i!==item)}else collectPower(item)}if(item.y>H+100||item.x<-80||item.x>L+80)items=items.filter(i=>i!==item)}
for(let e of enemies){if(e.dead)continue;e.rest=Math.max(0,e.rest-dt);if(freeze<=0){let speed=e.type==='shellMove'?8:Math.abs(e.vx);e.x+=e.vx*dt;if(e.type==='hopper'||e.type==='boss'){e.vy+=.45*dt;e.y+=e.vy*dt;if(e.y+e.h>=G){e.y=G-e.h;e.vy=e.type==='boss'?-5:-6}}if(e.type!=='shellMove'&&(Math.abs(e.x-e.start)>70||isGap(e.x+e.w/2,18)))e.vx*=-1;for(let b of blocks)if(!b.dead&&b.type==='pipe'&&overlap(e,b)){e.vx*=-1;e.x+=e.vx*dt*2}if(e.type==='shellMove')for(let other of enemies)if(other!==e&&!other.dead&&overlap(e,other))kill(other)}
if(overlap(inset(player,2,1),inset(e,3,2))&&!inv){if(shield>0||stomping){if(!e.rest)kill(e)}else if(e.type==='shellIdle'){e.type='shellMove';e.vx=player.facing*8;inv=12}else if(player.vy>0&&oldBottom<=e.y+Math.max(7,Math.abs(e.vy||0)+4)&&e.type!=='spike'){if(!e.rest){if(e.type==='shell'){e.type='shellIdle';e.vx=0;e.y+=14;e.h=14}else if(e.type==='shellMove'){e.type='shellIdle';e.vx=0}else kill(e)}player.y=e.y-player.h;player.vy=hold?-10:-6;player.on=false;tone(180,.07)}else{hurt();if(mode!=='playing'||player.x===70)return}}}
for(let s of shots){s.x+=s.vx*dt;s.y+=s.vy*dt;s.t-=dt;for(let e of enemies)if(!e.dead&&!e.rest&&overlap(s,e)){kill(e);e.rest=12;if(!s.pierce)s.t=0}if(!s.pierce&&blocks.some(b=>!b.dead&&overlap(s,b)))s.t=0}shots=shots.filter(s=>s.t>0);
if(player.y>H+90){hurt(true);return}if(player.x>=FINISH){let boss=enemies.find(e=>e.type==='boss'&&!e.dead);if(boss){player.x=FINISH-5;player.vx=0}else{completeLevel();return}}
const target=Math.max(0,Math.min(L-W,player.x+player.w/2-W*.33+player.vx*12));camera+=(target-camera)*(1-Math.exp(-.105*dt));if(Math.abs(target-camera)<.02)camera=target;player.anim+=Math.abs(player.vx)*dt*.2;player.state=hit?'hit':duck?'duck':!player.on?'jump':skid?'skid':Math.abs(player.vx)>.35?'run':'idle';for(let p of particles){p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=.2*dt;p.t-=dt}particles=particles.filter(p=>p.t>0);$('#power-status').textContent=active()?`${Math.ceil(powerTime/60)}s · ${cooldown>0?'recharging '+Math.ceil(cooldown/60)+'s':'X READY'}`:'Find a ★ block to unlock';beat(dt)}
function rect(x,y,w,h,c){ctx.fillStyle=c;ctx.fillRect(x,y,w,h)}
function text(t,x,y,size=14,c='#fff',align='left'){ctx.fillStyle=c;ctx.font=`bold ${size}px monospace`;ctx.textAlign=align;ctx.fillText(t,x,y);ctx.textAlign='left'}
function figure(c,x,y,s,a,state='idle',phase=0,facing=1){c.save();c.translate(x+16*s,y);c.scale(s*facing,s);c.translate(-16,0);let run=state==='run',air=state==='jump',hurt=state==='hit',duck=state==='duck',skid=state==='skid',dance=state==='dance',swing=run?Math.sin(phase)*6:dance?Math.sin(phase)*5:0,bob=run?Math.abs(Math.cos(phase))*1.5:0;c.translate(skid?-2:0,-bob);if(duck){c.translate(0,10);c.scale(1,.7)}function box(x,y,w,h,col){c.fillStyle=col;c.fillRect(Math.round(x),Math.round(y),w,h)}
if(a.style==='long'||a.style==='locs'){box(7,3,6,19,a.hair);box(23,3,6,19,a.hair)}box(7-swing,22,8,air?6:9,a.pants);box(19+swing,air?20:22,7,air?8:9,a.pants);box(4-swing,air?27:30,11,4,'#202126');box(19+swing,air?25:30,11,4,'#202126');box(7,11,20,13,a.color);box(2,air||hurt||dance?4+Math.sin(phase)*3:14+swing/2,5,air||hurt||dance?12:9,a.skin);box(27,air||hurt||dance?2-Math.sin(phase)*3:14-swing/2,5,air||hurt||dance?12:9,a.skin);box(10,2,15,11,a.skin);box(9,0,17,5,a.hair);if(a.style==='braids'||a.style==='locs')for(let n=0;n<4;n++)box(8+n*6,2,3,a.style==='locs'?16:11,a.hair);if(a.style==='beard')box(11,10,13,3,a.hair);if(a.style==='cap'){box(7,-2,19,5,a.hair);box(5,2,26,3,a.hair)}if(a.style==='shades'){box(10,5,15,4,'#131319');box(12,5,3,3,'#dddddb');box(20,5,3,3,'#dddddb')}if(a.style==='ears'){box(8,-5,5,8,a.hair);box(22,-5,5,8,a.hair)}box(20,6,2,2,'#151515');box(12,13,2,4,'#e8bf58');box(22,13,2,4,'#e8bf58');box(14,17,8,2,'#e8bf58');if(a.name==='21 Savage')box(17,3,2,3,'#37302b');c.restore()}
function background(){let a=artists[chosen],underground=level===6,night=[5,8,10].includes(level)||chosen===1||chosen===9;let sky=ctx.createLinearGradient(0,0,0,H);sky.addColorStop(0,underground?'#1c2433':night?'#283b59':a.sky);sky.addColorStop(1,underground?'#465064':night?a.far:'#edf1d5');ctx.fillStyle=sky;ctx.fillRect(0,0,W,H);if(!underground)clouds(night);if(!underground){ctx.fillStyle=night?'#d4d3dc':'#fff0c6';ctx.beginPath();ctx.arc(930,87,night?25:36,0,7);ctx.fill();for(let i=-1;i<12;i++){let x=i*150-(camera*.18%150),h=65+((i+20)*37+chosen*13)%100;rect(x,270-h,126,h,a.far+'88');for(let j=0;j<4;j++)rect(x+12+j*27,287-h,8,13,night?'#d6b37c':a.sky)}}
if(chosen===2){rect(765-camera*.05,55,6,205,a.far);rect(748-camera*.05,112,40,10,a.far)}if(chosen===1||chosen===9||chosen===15){for(let i=0;i<24;i++)rect((i*137+chosen*13)%W,18+(i*17)%130,2,2,'#eee');ctx.strokeStyle=a.accent;ctx.lineWidth=3;ctx.beginPath();ctx.arc(790-camera*.06,240,65,0,Math.PI*2);ctx.stroke()}
if(!underground){for(let j=-1;j<5;j++){let hx=j*370-(camera*.3%370);ctx.fillStyle=artists[chosen].accent+'55';ctx.beginPath();ctx.ellipse(hx+140,334,220,85,0,Math.PI,Math.PI*2);ctx.fill()}}for(let n=Math.floor(camera/B)-1;n<Math.ceil((camera+W)/B)+1;n++){let x=n*B-camera,k=((n%10)+10)%10,h=152+(k*19+chosen*11+level*7)%74;rect(x+4,G-h,304,h,underground?'#484a56':a.walls[k%3]);rect(x,G-h,312,8,'#323740');rect(x+306,G-h+8,7,h-8,'#0004');for(let row=0;row<Math.floor(h/20);row++)for(let j=0;j<9;j++)rect(x+7+j*34+(row%2)*13,G-h+15+row*20,28,1,'#ffffff20');for(let j=0;j<4;j++){rect(x+18+j*72,G-h+24,43,42,'#35424e');rect(x+21+j*72,G-h+27,36,17,night?'#e3be86':'#b6ccda');rect(x+22+j*72,G-h+28,3,32,'#ffffff33')}
panel(x+12,G-78,286,27,4,a.accent,'#ffffff44');text(a.levels[(k+level-1)%10].toUpperCase().slice(0,23),x+21,G-60,13,'#202838');rect(x+23,G-43,43,43,'#3d4652');rect(x+80,G-43,204,29,'#768996');text(String(k+1).padStart(2,'0'),x+280,G-h+20,9,'#ddd');
if([0,3,14].includes(chosen)){rect(x+290,G-170,5,170,'#756146');for(let j=-2;j<=2;j++){ctx.strokeStyle='#557b65';ctx.lineWidth=7;ctx.beginPath();ctx.moveTo(x+292,G-170);ctx.quadraticCurveTo(x+292+j*16,G-195,x+292+j*21,G-162);ctx.stroke()}}
if([6,7,12,13].includes(chosen)){rect(x+215,G-h+20,5,h-40,'#40424a');for(let j=0;j<4;j++)rect(x+194,G-h+37+j*30,47,4,'#40424a')}
if(chosen===11){rect(x+8,G-100,297,5,'#3a4049');for(let j=0;j<14;j++)rect(x+12+j*22,G-125,3,25,'#3a4049')}
if(chosen===3||chosen===8){for(let j=0;j<5;j++){rect(x+112+j*25,G-14,3,14,'#5c8459');rect(x+108+j*25,G-22,11,10,j%2?'#edb6c7':'#f4d37e')}}}
if(underground){rect(0,0,W,104,'#272c36');for(let x=0;x<W;x+=64){rect(x,88,62,16,'#50576a');rect(x+22,96,18,5,'#f6dba5')}}}
function panel(x,y,w,h,r,fill,stroke){ctx.beginPath();ctx.roundRect(x,y,w,h,r);ctx.fillStyle=fill;ctx.fill();if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=1;ctx.stroke()}}
function clouds(night){ctx.save();ctx.globalAlpha=night?.1:.55;for(let j=-1;j<5;j++){let x=j*300-(camera*.1%300),y=88+(j%3)*28;ctx.fillStyle='#fff';ctx.beginPath();ctx.ellipse(x+60,y+12,63,16,0,0,7);ctx.ellipse(x+36,y,22,22,0,0,7);ctx.ellipse(x+68,y-8,30,30,0,0,7);ctx.ellipse(x+95,y+1,23,22,0,0,7);ctx.fill()}ctx.restore()}
function drawBlock(b){const {x,y,w,h}=b;ctx.save();ctx.shadowColor='#17243033';ctx.shadowBlur=5;ctx.shadowOffsetY=3;
 if(b.type==='pipe'){const grad=ctx.createLinearGradient(x,0,x+w,0);grad.addColorStop(0,'#327d79');grad.addColorStop(.24,'#9bd7a8');grad.addColorStop(.46,'#5eb98f');grad.addColorStop(1,'#2d6c72');panel(x,y,w,h,4,grad,'#245c63');ctx.shadowBlur=0;panel(x,y,w,17,4,grad,'#2e7372');rect(x+6,y+4,w-12,2,'#d3f5c28c');ctx.restore();return}
 let color=b.type==='power'?artists[chosen].accent:b.type==='question'?'#f0bd50':b.type==='used'?'#a19485':b.type==='stone'?'#a6b3c0':b.type==='flower'?'#90c57b':b.type==='moving'?'#809fbd':'#c98c62';panel(x+.5,y+.5,w-1,h-1,4,color,'#23384b55');ctx.shadowBlur=0;rect(x+4,y+3,w-8,2,'#ffffff55');rect(x+4,y+h-5,w-8,2,'#00000020');
 if(b.type==='question'||b.type==='power'){text(b.type==='question'?'?':'★',x+w/2,y+24,23,'#fff9dd','center');for(let xx of [x+4,x+w-5])for(let yy of [y+5,y+h-6])rect(xx,yy,2,2,'#5d533466')}
 else if(b.type==='brick'){rect(x+1,y+15,w-2,1,'#794c3d88');rect(x+w/2,y+2,1,13,'#794c3d88');rect(x+8,y+16,1,h-18,'#794c3d88')}
 else if(b.type==='stone')panel(x+5,y+5,w-10,h-10,3,'#bec7cc','#ffffff33');else if(b.type==='moving'||b.type==='flower')rect(x+5,y+4,w-10,3,'#c8e0c8');ctx.restore()}
function drawCoin(x,y,phase){ctx.save();ctx.translate(x,y);ctx.scale(.55+Math.abs(Math.sin(phase))*.45,1);ctx.shadowColor='#ffcb5c66';ctx.shadowBlur=9;const g=ctx.createLinearGradient(-8,-10,8,10);g.addColorStop(0,'#fff3a0');g.addColorStop(.5,'#f8c94e');g.addColorStop(1,'#d9952c');ctx.fillStyle=g;ctx.beginPath();ctx.ellipse(0,0,8,11,0,0,7);ctx.fill();ctx.shadowBlur=0;ctx.strokeStyle='#fff5bb';ctx.lineWidth=1.5;ctx.beginPath();ctx.ellipse(0,0,5,8,0,0,7);ctx.stroke();rect(-1,-5,2,10,'#ac752855');ctx.restore()}
function drawPlayer(alpha){const x=(player.prevX??player.x)+(player.x-(player.prevX??player.x))*alpha,y=(player.prevY??player.y)+(player.y-(player.prevY??player.y))*alpha,cx=x+player.w/2;
 ctx.save();ctx.fillStyle='#26302e30';ctx.beginPath();ctx.ellipse(cx,player.on?y+player.h+2:G+2,player.w*.58,4,0,0,7);ctx.fill();ctx.restore();
 if(inv&&Math.floor(inv/5)%2!==0)return;let scale=player.big?1.65:1.18;let renderHeight=player.duck?34*scale*.7:34*scale;
 if(shield>0||active()){ctx.strokeStyle=shield>0?'#eef9ff':artists[chosen].accent;ctx.lineWidth=2;ctx.fillStyle=artists[chosen].accent+'22';ctx.beginPath();ctx.ellipse(cx,y+player.h/2,player.w/2+9,player.h/2+7,0,0,7);ctx.fill();ctx.stroke()}
 ctx.save();ctx.translate(cx,y+player.h);let squash=player.on?(player.land||0)/7*.1:0;ctx.scale(1+squash,1-squash);if(player.duck){ctx.scale(1,.69);figure(ctx,-16*scale,-34*scale,scale,artists[chosen],'idle',player.anim,player.facing)}else figure(ctx,-16*scale,-34*scale,scale,artists[chosen],player.state,player.anim,player.facing);ctx.restore();
}
function drawPickup(i){ctx.save();ctx.shadowColor=artists[chosen].accent+'66';ctx.shadowBlur=12;if(i.type==='grow'){panel(i.x+4,i.y+12,18,14,5,'#f6e6be','#b59272');panel(i.x,i.y,26,17,7,'#ec6463','#b94c4f');panel(i.x+5,i.y+3,6,7,3,'#fff2db');panel(i.x+17,i.y+4,5,6,2,'#fff2db');rect(i.x+9,i.y+18,2,4,'#54423b');rect(i.x+16,i.y+18,2,4,'#54423b')}else{panel(i.x,i.y,26,26,8,artists[chosen].accent,'#f7f6dd');text('★',i.x+13,i.y+21,21,'#fff9d9','center')}ctx.restore()}
function drawEnemy(e){ctx.save();let shell=e.type.startsWith('shell'),boss=e.type==='boss',frozen=freeze>0;ctx.fillStyle='#24322a2b';ctx.beginPath();ctx.ellipse(e.x+e.w/2,e.y+e.h+1,e.w*.58,4,0,0,7);ctx.fill();let col=frozen?'#9dd8eb':boss?'#b25d85':shell?'#64a894':e.type==='spike'?'#956d95':'#b58b68';panel(e.x,e.y+2,e.w,e.h-2,shell?7:5,col,'#293b4d55');panel(e.x+2,e.y+3,e.w-4,5,2,'#ffffff40');if(shell){ctx.strokeStyle='#304c5060';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(e.x+e.w/2,e.y+5);ctx.lineTo(e.x+e.w/2,e.y+e.h-2);ctx.moveTo(e.x+3,e.y+e.h/2);ctx.lineTo(e.x+e.w-3,e.y+e.h/2);ctx.stroke()}
if(!['shellIdle','shellMove'].includes(e.type)){panel(e.x+4,e.y+8,9,9,3,'#fff4d5');panel(e.x+e.w-13,e.y+8,9,9,3,'#fff4d5');rect(e.x+7+(e.vx>0?2:0),e.y+11,3,4,'#263543');rect(e.x+e.w-11+(e.vx>0?2:0),e.y+11,3,4,'#263543')}
if(e.type==='spike'){for(let j=0;j<3;j++){ctx.fillStyle='#e0e6ed';ctx.beginPath();ctx.moveTo(e.x+j*10,e.y+3);ctx.lineTo(e.x+j*10+5,e.y-5);ctx.lineTo(e.x+j*10+10,e.y+3);ctx.fill()}}panel(e.x,e.y+e.h-3,10,5,2,'#4b4345');panel(e.x+e.w-10,e.y+e.h-3,10,5,2,'#4b4345');if(boss){drawCrown(ctx,e.x+12,e.y-15,34,'#edc979');text('♥'.repeat(e.hp),e.x+e.w/2,e.y-22,14,'#ffe1ab','center')}ctx.restore()}
function draw(alpha=1){if(mode!=='playing')alpha=1;const simulationCamera=camera;camera=previousCamera+(camera-previousCamera)*alpha;background();ctx.save();ctx.translate(-camera,0);let edge=0;for(let g of [...gaps,[L,L]]){rect(edge,G,g[0]-edge,H-G,'#9b7661');rect(edge,G,g[0]-edge,10,'#85b95c');rect(edge,G+2,g[0]-edge,3,'#c8e29b');rect(edge,G+10,g[0]-edge,4,'#647745');for(let y=G+12;y<H;y+=20)for(let x=Math.max(edge,Math.floor(camera/32)*32);x<Math.min(g[0],camera+W+40);x+=32){rect(x,y,30,2,'#71584455');rect(x+16,y,2,18,'#71584455')}edge=g[1]}
for(let b of blocks){if(!b.dead&&b.x+b.w>=camera&&b.x<=camera+W)drawBlock(b)}
for(let c of coins)if(!c.got&&c.x>camera-20&&c.x<camera+W+20)drawCoin(c.x,c.y,frame*.055+c.x);
for(let i of items)drawPickup(i);
for(let e of enemies)if(!e.dead&&e.x>camera-80&&e.x<camera+W+80)drawEnemy(e);
for(let s of shots){rect(s.x,s.y,s.w,s.h,s.color);rect(s.x+3,s.y+3,s.w-6,s.h-6,'#fff6')}
rect(FINISH,116,5,G-116,'#e9e7d7');rect(FINISH-4,108,13,12,'#e9c762');let flagY=mode==='flag'?Math.min(G-40,120+cutTime*3):120;rect(FINISH+5,flagY,58,34,artists[chosen].accent);text('★',FINISH+33,flagY+24,22,'#172636','center');rect(L-100,G-116,92,116,'#353943');rect(L-110,G-127,110,15,artists[chosen].accent);text('STAGE',L-54,G-85,16,'#eee','center');rect(L-75,G-52,40,52,'#1c2230');

drawPlayer(alpha);if(currentPower()==='skate'){rect(player.x-9,player.y+player.h,48,5,'#d9ba74');rect(player.x,player.y+player.h+5,7,6,'#333');rect(player.x+25,player.y+player.h+5,7,6,'#333')}
for(let p of particles)rect(p.x,p.y,4,4,p.c);ctx.restore();panel(16,15,218,56,12,'#182331e8','#ffffff30');text('SCORE '+String(score).padStart(6,'0'),29,35,13);text('GOLD '+String(coinTotal).padStart(2,'0')+'   LIVES '+lives,29,57,12,'#f3d994');panel(W-255,15,239,56,12,'#182331e8','#ffffff30');text('WORLD '+(chosen+1)+'–'+level+'    TIME '+Math.ceil(timer),W-241,35,12);text(artists[chosen].levels[level-1].toUpperCase().slice(0,24),W-241,56,11,'#d9ddeb');if(level===10&&enemies.some(e=>e.type==='boss'&&!e.dead)&&player.x>L-1100)text('STOMP THE HEADLINER 3 TIMES',W/2,100,15,'#fff','center');if(mode==='victory')drawVictory();camera=simulationCamera}
function drawVictory(){let a=artists[chosen],t=cutTime/60,u=chosen;rect(0,0,W,H,'#101320f5');for(let j=0;j<14;j++){let x=(j*97+chosen*23)%W,y=(j*47+cutTime*1.4)%H;rect(x,y,5,10,j%2?a.accent:'#e4cb80')}ctx.fillStyle=a.accent+'33';ctx.beginPath();ctx.moveTo(W/2,70);ctx.lineTo(W/2-200,430);ctx.lineTo(W/2+200,430);ctx.closePath();ctx.fill();text(a.name.toUpperCase()+' CLEARED ALL 10 LEVELS',W/2,65,25,'#fff','center');text(a.victory.toUpperCase(),W/2,100,15,a.accent,'center');rect(W/2-190,389,380,22,a.accent);rect(W/2-170,411,340,13,'#555b72');let x=W/2-45,y=285,rotation=0,state='dance',phase=t*9;
switch(u){case 0:x+=Math.sin(t*7)*25;y-=Math.abs(Math.sin(t*7))*12;break;case 1:y-=Math.abs(Math.sin(t*4))*110;state='jump';break;case 2:y-=Math.abs(Math.sin(t*8))*85;x+=Math.sin(t*4)*18;state='jump';text('ANITA MAX WYNN!',W/2,168,26,'#96beff','center');break;case 3:x+=Math.sin(t*4)*60;rotation=Math.sin(t*4)*.22;break;case 4:state=t%2<1?'dance':'idle';rect(W/2+80,280+(t%2)*45,6,24,'#bbb');rect(W/2+77,277+(t%2)*45,12,8,'#ddd');break;case 5:y-=Math.abs(Math.sin(t*3))*70;state='jump';break;case 6:state='dance';text('◇',W/2,230,55,'#e9cd83','center');break;case 7:state='idle';drawCrown(ctx,W/2-24,225-Math.sin(t*2)*15,48,'#efd071');break;case 8:x+=Math.sin(t*3)*65;y-=Math.abs(Math.sin(t*3))*90;state='jump';rect(W/2+95,216,50,7,'#c67b47');rect(W/2+139,165,6,58,'#dcdad2');break;case 9:y-=45+Math.sin(t*3)*30;rotation=Math.sin(t*2)*.1;break;case 10:y-=Math.abs(Math.sin(t*6))*20;x+=Math.sin(t*2)*12;break;case 11:y-=Math.abs(Math.sin(t*4))*60;state='jump';ctx.save();ctx.translate(W/2,375-Math.abs(Math.sin(t*4))*40);ctx.rotate(t*5);rect(-42,-3,84,6,'#a48ca9');rect(-30,4,10,8,'#e8d6a7');rect(20,4,10,8,'#e8d6a7');ctx.restore();break;case 12:x+=Math.sin(t*3)*60;rotation=Math.sin(t*3)*.17;break;case 13:x+=Math.sin(t*5)*35;phase=t*12;break;case 14:x+=Math.sin(t*3)*50;rotation=Math.sin(t*3)*.13;break;case 15:y-=Math.abs(Math.sin(t*5))*60;rotation=Math.sin(t*5)*.3;break}
ctx.save();ctx.translate(x+48,y+48);ctx.rotate(rotation);figure(ctx,-48,-48,3,a,state,phase,1);ctx.restore();if([3,12,15].includes(u))for(let n=0;n<8;n++){let ang=t*2+n*Math.PI/4;rect(W/2+Math.cos(ang)*130,280+Math.sin(ang)*55,9,9,a.accent)}text('YOUR TROPHY & MUSIC CARD ARE NEXT…',W/2,463,13,'#bec2d4','center')}
function drawCrown(c,x,y,w,color){c.fillStyle=color;c.fillRect(x,y+w*.35,w,w*.22);for(let n=0;n<3;n++)c.fillRect(x+n*w*.4,y,w*.2,w*.4);c.fillStyle='#fff4bd';c.fillRect(x+3,y+w*.44,w-6,3)}
function paintTrophy(){let c=$('#trophy').getContext('2d');c.clearRect(0,0,192,192);c.fillStyle='#f1ead8';c.fillRect(0,0,192,192);c.fillStyle='#20232d';c.fillRect(38,145,118,27);c.fillStyle='#ba8c32';c.fillRect(48,135,98,14);c.fillStyle='#e2bb58';c.fillRect(86,99,14,38);c.fillRect(66,110,60,10);c.fillStyle='#ca9a36';c.fillRect(101,67,12,45);for(let i=0;i<8;i++){c.fillStyle=i%2?'#deb44d':'#eccc73';c.fillRect(42+i*8,27+i*5,10,71-i*7)}c.fillStyle='#795727';c.fillRect(36,28,10,69);c.fillStyle='#e8ca74';c.fillRect(32,24,8,78);c.fillStyle='#eee0b0';c.fillRect(32,24,13,7);c.fillStyle='#ead498';c.fillRect(60,154,73,8)}
function paintCover(index,target=$('#cover')){let a=artists[index],c=target.getContext('2d');c.imageSmoothingEnabled=false;function r(x,y,w,h,col){c.fillStyle=col;c.fillRect(x,y,w,h)}r(0,0,192,192,a.far);let colors=['#ae3031','#351b5b','#a3cfe4','#e3a9b8','#999b94','#8660ae','#1b202b','#9e2623','#e9d3ae','#3b274c','#594b3f','#dac18e','#f6a5d2','#757a91','#b7b880','#ce8ab7'];r(8,8,176,176,colors[index]);
// Each cover is an original, game-style interpretation of a track or album theme.
if([0,4,6,10].includes(index)){for(let j=0;j<6;j++)r(15+j*29,60+(j%3)*9,23,85-(j%3)*9,index===6?'#41454c':'#252b35');figure(c,68,56,2.1,a,'idle',0,1)}else if([1,5,9,15].includes(index)){for(let n=0;n<20;n++)r(17+(n*43)%157,33+(n*31)%90,3,3,'#e9d8b0');c.fillStyle=a.accent;c.beginPath();c.arc(99,95,44,0,7);c.fill();r(42,113,105,6,'#141d3566');figure(c,71,64,1.9,a,'jump',0,1)}else if(index===2){r(8,103,176,43,'#d4e4e4');for(let j=0;j<7;j++)r(12+j*26,60+(j%3)*12,19,51-(j%3)*12,'#719ab2');r(144,30,3,88,'#52758a');r(135,51,23,5,'#52758a');figure(c,65,70,2,a)}else if(index===3){figure(c,33,25,4,a,'idle');r(12,138,168,12,'#252c30')}else if(index===7){r(24,116,145,12,'#d4b574');for(let j=0;j<7;j++)r(31+j*20,108,13,8,'#e8c381');figure(c,65,50,2,a);drawCrown(c,77,41,38,'#e3bd52')}else if(index===8){r(12,120,168,22,'#796847');for(let j=0;j<5;j++){r(15+j*37,72,25,48,'#56564c');r(20+j*37,78,6,9,'#e2d4ac')}figure(c,63,53,2,a)}else if(index===11){figure(c,43,38,3.2,a);r(75,63,4,4,'#433337');r(91,70,6,3,'#433337')}else if(index===12){for(let j=0;j<8;j++)r(17+j*22,35,10,94,j%2?'#ffd7ee':'#b76eaa');figure(c,63,58,2.2,a,'dance',1)}else if(index===13){for(let y=22;y<145;y+=16)for(let x=14;x<180;x+=16)r(x,y,14,14,(x+y)%32?'#dce0d7':'#1f2b37');figure(c,50,43,2.8,a)}else if(index===14){r(8,96,176,46,'#a2cbd1');for(let x of [30,151]){r(x,52,5,85,'#7c6544');r(x-20,49,43,6,'#567255');r(x-13,42,27,6,'#567255')}figure(c,65,65,2,a,'dance',0)}
r(8,147,176,37,'#101520');c.fillStyle='white';let size=15;while(size>8){c.font=`bold ${size}px monospace`;if(c.measureText(a.song.toUpperCase()).width<164)break;size--}c.textAlign='center';c.fillText(a.song.toUpperCase(),96,163);c.fillStyle='#c3c8d3';c.font='9px monospace';c.fillText(a.name.toUpperCase(),96,178);c.textAlign='left';}
function showReward(){mode='reward';$('#overlay').classList.add('hidden');$('#reward').classList.remove('hidden');$('#reward-title').textContent=artists[chosen].name.toUpperCase()+' TAKES THE STAGE';$('#award').textContent=artists[chosen].song+' — '+artists[chosen].award;$('#source').classList.toggle('hidden',!artists[chosen].source);$('#source').href=artists[chosen].source||'#';$('#reward-note').textContent='Gramophone game trophy + original pixel-art tribute cover. '+(artists[chosen].source?'Award details above refer to the real recording; this is an unofficial game reward.':'This fan-selected song is not presented as a Grammy winner.');paintTrophy();paintCover(chosen);syncMusic()}
function cutscene(dt){cutTime+=dt;if(mode==='flag'){player.x=FINISH-25;player.prevX=player.x;player.y=Math.min(G-player.h,player.y+3*dt);player.prevY=player.y;player.state='idle';if(cutTime>90){if(level===10){mode='victory';cutTime=0}else{mode='next';show(artists[chosen].levels[level-1].toUpperCase()+' CLEAR!',`${level} / 10 cleared · ${artists[chosen].levels[level]} is next.`,`START LEVEL ${level+1} →`)}}}else if(mode==='victory'&&cutTime>=300)showReward()}
artists.forEach((a,i)=>{let b=document.createElement('button');b.className='skin'+(i===0?' active':'');b.setAttribute('aria-pressed',i===0);b.innerHTML=`<canvas class="portrait" width="44" height="55"></canvas><div><b>${a.name}</b><small>${a.city}</small><span class="tag">${powers[a.power].name}</span></div>`;b.onclick=()=>select(i);$('#roster').appendChild(b);figure(b.querySelector('canvas').getContext('2d'),0,8,1.32,a)});
$('#play').onclick=begin;$('#restart').onclick=()=>{spawn();mode='ready';intro();syncMusic()};$('#pause').onclick=pause;$('#sound').onclick=()=>{sound=!sound;$('#sound').textContent=sound?'♪ SOUND ON':'♪ SOUND OFF';tone(440);syncMusic()};$('#trophy-room').onclick=()=>{if(progress[chosen].complete)showReward()};$('#replay').onclick=()=>{level=1;reset();mode='ready';intro();syncMusic()};$('#close-reward').onclick=()=>{mode='ready';$('#reward').classList.add('hidden');intro();$('#roster').scrollIntoView({behavior:'smooth',block:'center'})};$('#add-song').onclick=()=>$('#song').click();$('#song').onchange=e=>{let f=e.target.files[0];if(!f)return;if(tracks[chosen])URL.revokeObjectURL(tracks[chosen].url);tracks[chosen]={url:URL.createObjectURL(f),name:f.name};sound=true;$('#sound').textContent='♪ SOUND ON';syncMusic();e.target.value=''};$('#remove-song').onclick=()=>{songPlayer.pause();if(tracks[chosen])URL.revokeObjectURL(tracks[chosen].url);tracks[chosen]=null;syncMusic()};
addEventListener('keydown',e=>{if(e.target.tagName==='INPUT')return;if(['ArrowLeft','ArrowRight','ArrowDown','ArrowUp','Space'].includes(e.code))e.preventDefault();keys[e.code]=true;if(!e.repeat&&['Space','ArrowUp','KeyW'].includes(e.code))jump();if(!e.repeat&&e.code==='KeyX')usePower();if(!e.repeat&&e.code==='KeyP')pause()});addEventListener('keyup',e=>release(e.code));addEventListener('blur',()=>{keys={};if(mode==='playing')pause()});
[['left','ArrowLeft'],['right','ArrowRight'],['run','ShiftLeft'],['jump','Space'],['power','KeyX']].forEach(([id,k])=>{let b=$('#'+id);b.onpointerdown=e=>{e.preventDefault();b.setPointerCapture(e.pointerId);keys[k]=true;if(k==='Space')jump();if(k==='KeyX')usePower()};b.onpointerup=b.onpointercancel=()=>release(k)});
let accumulator=0;function loop(t){let delta=Math.min(100,t-last||16.667);last=t;accumulator+=delta;while(accumulator>=1000/60){frame++;if(mode==='playing')update(1);else if(mode==='flag'||mode==='victory')cutscene(1);accumulator-=1000/60}draw(accumulator/(1000/60));requestAnimationFrame(loop)}reset();intro();musicLabel();requestAnimationFrame(loop);
