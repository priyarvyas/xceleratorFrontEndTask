const data = [
  {
    "id": "5c759c9bed04ec0790f3f7fc",
    "title": "Ipsum ullamco ipsum voluptate occaecat proident magna eu aliqua magna commodo eu consectetur anim.",
    "image": `https://picsum.photos/200/300?image=1040`,
    "text": "Dolore proident aute cillum ex voluptate ea. Cupidatat nostrud velit in reprehenderit ipsum veniam id aliqua. Nostrud magna Lorem incididunt sint Lorem dolor duis quis ad dolor excepteur ad. Ex eiusmod irure ex eu ea in elit dolore sunt exercitation tempor qui ad eu.",
    "date": "Saturday, January 26, 2019 5:31 AM",
    "tags": "aliquip",
    "category": "apple",
    "liked": true,
    "bookmarked": true
  },
  {
    "id": "5c759c9b4aaee85d2d97b8e7",
    "title": "Et laborum aliquip ipsum non cupidatat.",
    "image": `https://picsum.photos/200/300?image=1041`,
    "text": "Voluptate consequat non incididunt eiusmod. Reprehenderit sunt veniam officia in adipisicing sunt aute adipisicing. Reprehenderit do sit occaecat nisi incididunt consequat enim cupidatat. Ex esse sunt irure sunt quis ipsum reprehenderit aute. Ipsum ad cillum adipisicing nostrud aliquip ut nisi occaecat incididunt proident pariatur ullamco ad proident. Cupidatat cillum cupidatat fugiat minim cupidatat do pariatur aute fugiat.",
    "date": "Wednesday, November 29, 2017 10:30 AM",
    "tags": "occaecat",
    "category": "banana",
    "liked": true,
    "bookmarked": true
  },
  {
    "id": "5c759c9b19c76c2de2af3098",
    "title": "Est fugiat occaecat officia eu exercitation nulla excepteur ad elit deserunt.",
    "image": `https://picsum.photos/200/300?image=1042`,
    "text": "Cupidatat velit cillum laboris cillum reprehenderit irure velit amet. Sunt non ex aute aliquip esse ullamco laborum ad. Tempor aliqua ut et Lorem velit in cillum. Irure aliqua eiusmod enim ipsum quis qui ea quis pariatur occaecat sunt proident. Veniam sint est nulla qui excepteur cupidatat. Consequat occaecat aliqua ex excepteur commodo Lorem. Lorem enim pariatur in quis ad labore incididunt.",
    "date": "Tuesday, August 4, 2015 2:14 PM",
    "tags": "amet",
    "category": "strawberry",
    "liked": true,
    "bookmarked": true
  },
  {
    "id": "5c759c9b547e4bd42d53a8cc",
    "title": "Est adipisicing veniam quis tempor sunt aliquip dolor irure enim ea dolore sit fugiat duis.",
    "image": `https://picsum.photos/200/300?image=1043`,
    "text": "Ipsum cupidatat nulla duis eu proident mollit duis dolor deserunt. Voluptate ipsum aute enim adipisicing magna pariatur irure quis cillum commodo. Ullamco voluptate tempor aliqua do et non voluptate dolor est nostrud nisi proident adipisicing anim. Ex in do occaecat adipisicing irure labore labore anim aute et incididunt pariatur consectetur. Elit est veniam ad fugiat exercitation. Excepteur ullamco amet veniam in ex cillum sint reprehenderit velit proident sint voluptate eu.",
    "date": "Tuesday, February 17, 2015 2:18 PM",
    "tags": "dolor",
    "category": "apple",
    "liked": true,
    "bookmarked": true
  },
  {
    "id": "5c759c9ba12596cdbf39b5bf",
    "title": "Nisi sint laboris duis et irure officia minim dolor est tempor.",
    "image": `https://picsum.photos/200/300?image=1044`,
    "text": "Veniam anim occaecat excepteur adipisicing aliqua exercitation excepteur amet. Ullamco veniam minim mollit ipsum consectetur do laboris laboris eiusmod. Et magna labore duis occaecat ad ullamco officia mollit fugiat laboris occaecat.",
    "date": "Thursday, May 24, 2018 11:03 PM",
    "tags": "sunt",
    "category": "banana",
    "liked": false,
    "bookmarked": false
  },
  {
    "id": "5c759c9bf6c775cd1ed640f0",
    "title": "Et id aliquip et nisi duis exercitation tempor.",
    "image": `https://picsum.photos/200/300?image=1045`,
    "text": "Adipisicing et nisi ipsum pariatur eu velit mollit commodo. Labore irure tempor excepteur fugiat eiusmod aliquip adipisicing minim cupidatat consequat deserunt ea. Deserunt anim qui dolore cupidatat eu cupidatat ad deserunt ullamco quis elit incididunt sit velit. Aliquip officia tempor aliquip enim laborum laborum quis officia pariatur pariatur veniam. Et mollit velit consectetur dolore consequat mollit labore in excepteur adipisicing. Sit ipsum incididunt ut fugiat enim irure.",
    "date": "Sunday, November 4, 2018 3:51 PM",
    "tags": "sit",
    "category": "banana",
    "liked": false,
    "bookmarked": false
  },
  {
    "id": "5c759c9b5a1404f44f2b6eb5",
    "title": "Exercitation nulla incididunt eiusmod sunt quis commodo labore qui in est laborum tempor.",
    "image": `https://picsum.photos/200/300?image=1050`,
    "text": "Cillum laborum nulla id et mollit fugiat voluptate duis in excepteur eiusmod sint anim do. Ullamco ut proident Lorem amet ad magna commodo Lorem deserunt velit officia. Elit non incididunt deserunt cupidatat sunt enim consequat dolor. Sunt nulla elit ex fugiat culpa velit esse eiusmod. Est incididunt velit duis incididunt est aute qui. Reprehenderit ex nulla ad sint laboris dolore veniam Lorem amet exercitation ipsum. Proident sit in dolor deserunt ex incididunt exercitation laborum dolor elit proident Lorem voluptate enim.",
    "date": "Friday, January 5, 2018 2:29 AM",
    "tags": "culpa",
    "category": "apple",
    "liked": false,
    "bookmarked": false
  },
  {
    "id": "5c759c9b0090ec77834b524c",
    "title": "Consectetur nisi minim culpa incididunt.",
    "image": `https://picsum.photos/200/300?image=1047`,
    "text": "Fugiat commodo ea veniam nulla voluptate aliquip aute dolor officia aute adipisicing qui est. Non laborum laborum pariatur esse dolore pariatur velit ad proident duis. Ad in tempor labore reprehenderit nisi non labore ea ipsum nostrud ex. Exercitation quis non quis ullamco officia et pariatur culpa officia.",
    "date": "Friday, October 21, 2016 9:54 AM",
    "tags": "labore",
    "category": "strawberry",
    "liked": false,
    "bookmarked": false
  },
  {
    "id": "5c759c9bd94d9e876b3ddfcc",
    "title": "Elit dolor velit velit sunt ex magna nisi qui velit.",
    "image": `https://picsum.photos/200/300?image=1051`,
    "text": "Minim excepteur incididunt est sint sit sunt quis occaecat commodo qui pariatur nulla. Et sit fugiat fugiat non excepteur adipisicing cupidatat nisi eiusmod. Ut incididunt in et eiusmod ullamco ea eiusmod aute. Aliqua exercitation laboris consequat esse amet reprehenderit. Irure pariatur amet proident consectetur. Ex ea sint do occaecat in sunt ad eu sit ullamco sit labore magna voluptate. Do consequat elit voluptate cupidatat.",
    "date": "Sunday, March 12, 2017 7:40 AM",
    "tags": "labore",
    "category": "apple",
    "liked": false,
    "bookmarked": false
  },
  {
    "id": "5c759c9bc65c18b1826d6bce",
    "title": "Nulla proident reprehenderit voluptate do sint proident ut qui ad incididunt consequat eiusmod consectetur est.",
    "image": `https://picsum.photos/200/300?image=1049`,
    "text": "Ea enim proident excepteur tempor est reprehenderit voluptate proident exercitation labore in. Anim occaecat ut minim ipsum enim minim reprehenderit tempor. Laboris aute irure adipisicing tempor do consequat.",
    "date": "Monday, April 25, 2016 11:40 AM",
    "tags": "laborum",
    "category": "apple",
    "liked": false,
    "bookmarked": false
  }
]

export { data }