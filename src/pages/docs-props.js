const commonDocs = [
  {
    propsName: "className",
    propsDescription: "An optional className to apply to the component."
  },
  {
    propsName: "title",
    propsDescription: "The title to display on the component."
  },
  {
    propsName: "description",
    propsDescription: "The description to display below the title."
  }
]
export const docsToDoList = [...commonDocs]

export const docsPieCircle = [
  ...commonDocs,
  {
    propsName: "items",
    propsDescription:
      "array of object to pass to the component : { name: 'Game', value: 355 }"
  }
]

export const docsNewChart = [
  ...commonDocs,
  {
    propsName: "addNewChart",
    propsDescription: "A trigger function click event"
  }
]
export const docsLogChart = [
  ...commonDocs,
  {
    propsName: "items",
    propsDescription:
      "array of object to pass to the component : { name: 'M', value: { from: 9, to: 18 } }"
  }
]
export const docsEvaluation = [
  ...commonDocs,
  {
    propsName: "items",
    propsDescription:
      "array of object to pass to the component : {label: 'css', progress: 30 }"
  }
]
export const docsNewCalendar = [
  ...commonDocs,
  {
    propsName: "year",
    propsDescription: "default year to show"
  },
  {
    propsName: "addNewCalendar",
    propsDescription: "A trigger function click event"
  }
].filter(c => c.propsName !== "description")
export const docsCalendar = [
  {
    propsName: "className",
    propsDescription: "An optional className to apply to the component."
  },
  {
    propsName: "dateCellRender",
    propsDescription: "A function "
  },
  {
    propsName: "onChange",
    propsDescription: "Function(date: moment)"
  },
  {
    propsName: "monthCellContentRender",
    propsDescription: "Function"
  }
]

export const docsNotificationList = [
  ...commonDocs,
  {
    propsName: "items",
    propsDescription: `array of object to pass to the component : {
      numberOfNotification: 2,
      label: 'Lorem ipsum',
      description: 'Ac ne quis a nobis hoc',
      createdDate: '12:37'
    }`
  }
]
export const docsComments = [
  ...commonDocs,
  {
    propsName: "items",
    propsDescription: `array of object to pass to the component : {
    path: "http://i.pravatar.cc/150?img=33",
    name: "Student Name",
    createdDate: "2 Month ago",
    description: "lorem ipsum dolerm tsoun dfrizer uplod ishler conita"
  }`
  },
  {
    propsName: "currentUser",
    propsDescription: ` object to pass to the component : {
    path: "http://i.pravatar.cc/150?img=33"
  }`
  },
  {
    propsName: "onAddComment",
    propsDescription: `A Function to add comment`
  }
]
export const docsPersonalInfo = [
  {
    propsName: "className",
    propsDescription: "An optional className to apply to the component."
  },
  {
    propsName: "userObject",
    propsDescription: ` object to pass to the component : {
    name: "Student Name",
    points: 741,
    maxPoints: 1000,
    path: "http://i.pravatar.cc/150?img=49",
    percent: 70
  }`
  }
]
export const docsGift = [
  {
    propsName: "className",
    propsDescription: "An optional className to apply to the component."
  },
  {
    propsName: "title",
    propsDescription: "The title of message to display on the component."
  },
  {
    propsName: "message",
    propsDescription: "The message to display on the component."
  },
  {
    propsName: "linkObject",
    propsDescription: ` object to pass to the component : { title: "Say Hello", position: "center" }`
  },
  {
    propsName: "avatar",
    propsDescription: ` object to pass to the component : {
      path:
        "https://imgplaceholder.com/100x100/1876d1/ffffff/fa-image"
    }`
  },
  {
    propsName: "icon",
    propsDescription: ` use mdi icon`
  }
]
export const docsChatList = [
  ...commonDocs,
  {
    propsName: "items",
    propsDescription: `array of object to pass to the component : {
    name: "Student Name",
    path: "http://i.pravatar.cc/150?img=49",
    status: "onLine"
  }`
  }
]
export const docsUserList = [
  ...commonDocs,
  {
    propsName: "items",
    propsDescription: `array of object to pass to the component : {
    path: "http://i.pravatar.cc/150?img=3",
    name: "Student Name",
    job: "web",
    notification: true
  }`
  }
]
export const docsEventList = [
  ...commonDocs,
  {
    propsName: "items",
    propsDescription: `array of object to pass to the component : {
    label: "nobis hoc",
    description: "Ac ne quis a nobis hoc",
    createdDate: {
      day: 13,
      month: "January",
      time: "12:37"
    }
  }`
  },
  {
    propsName: "onAddEvent",
    propsDescription: `A Function to add new event`
  },
  {
    propsName: "onChecklist",
    propsDescription: `A Function to check event`
  }
]
export const docsReviews = [
  ...commonDocs,
  {
    propsName: "negativePorcentage",
    propsDescription: `A value for negative percentage`
  },
  {
    propsName: "positivePorcentage",
    propsDescription: `A value for negative percentage`
  }
]
export const docsFilters = [
  ...commonDocs,
  {
    propsName: "items",
    propsDescription: `array of object to pass to the component : {
    min: -100,
    max: 100,
    value: 50
  }`
  }
]
export const docsTrackList = [
  ...commonDocs,
  {
    propsName: "items",
    propsDescription: `array of object to pass to the component : {
    label: "Skill Done",
    value: "80%"
  }`
  },
  {
    propsName: "onClickItem",
    propsDescription: `A Function to click on Item`
  }
]
export const docsRating = [
  ...commonDocs,
  {
    propsName: "items",
    propsDescription: `array of object to pass to the component : {
    star: 5,
    number: 123,
    value: 40
  }`
  },
  {
    propsName: "average",
    propsDescription: `Average value`
  },
  {
    propsName: "cumulates",
    propsDescription: `Cumulates value`
  }
]
export const docsProjectList = [
  ...commonDocs,
  {
    propsName: "items",
    propsDescription: `array of object to pass to the component : {
    label: "Project 1",
    value: 52
  }`
  },
  {
    propsName: "onAddProject",
    propsDescription: `A Function to add project`
  }
]
export const docsTimer = [
  {
    propsName: "className",
    propsDescription: "An optional className to apply to the component."
  }
]
export const docsTrackInfo = [
  ...commonDocs,
  {
    propsName: "items",
    propsDescription: `array of object to pass to the component : {
    color: "red",
    title: "Workshop 1",
    createdAt: "21 Oct",
    time: "12:37",
    avatars: [
      "http://i.pravatar.cc/150?img=25",
      "http://i.pravatar.cc/150?img=68",
      "http://i.pravatar.cc/150?img=3",
      "http://i.pravatar.cc/150?img=12"
    ],
    status: "Closed"
  }`
  },
  {
    propsName: "imagePath",
    propsDescription: "image path of component."
  },
  {
    propsName: "progress",
    propsDescription: "value of progress."
  }
]
export const docsDownload = [
  {
    propsName: "className",
    propsDescription: "An optional className to apply to the component."
  },
  {
    propsName: "fileSize",
    propsDescription: "size of the file must be String."
  },
  {
    propsName: "typeFile",
    propsDescription: "the type of file."
  },
  {
    propsName: "filePath",
    propsDescription: "the path of file."
  }
]
export const docsDiscover = [
  ...commonDocs,
  {
    propsName: "items",
    propsDescription: `array of object to pass to the component : {
      path: "http://i.pravatar.cc/150?img=3",
      name: "Student Name",
      job: "web",
      notification: true
    }`
  }
]
export const docsUpload = [
  {
    propsName: "className",
    propsDescription: "An optional className to apply to the component."
  },
  {
    propsName: "fileSize",
    propsDescription: "size of the file must be String."
  }
]
export const docsContainerTab = [
  {
    propsName: "className",
    propsDescription: "An optional className to apply to the component."
  },
  {
    propsName: "Tab",
    propsDescription: `<TabsContainer>
    <Tabs tabId="simple-tab">{children}</Tabs>
  </TabsContainer>`
  }
]
export const docsInterests = [
  {
    propsName: "className",
    propsDescription: "An optional className to apply to the component."
  },
  {
    propsName: "classNameActive",
    propsDescription: "An optional className to apply to the item is active."
  },
  {
    propsName: "label",
    propsDescription: "label of item."
  },
  {
    propsName: "onClickInterest",
    propsDescription: "A Function to call when click on item."
  }
]

export const docsSignUp = [
  {
    propsName: "onSubmit",
    propsDescription: `trigger function callback return an object { email, password, lastName, firstName }`
  },
  {
    propsName: "existAccount",
    propsDescription: `A trigger function callback`
  }
]
export const docsSignIn = [
  {
    propsName: "onSubmit",
    propsDescription: `trigger function callback return an object { email, password }`
  },
  {
    propsName: "redirectToForgetPassword",
    propsDescription: `A trigger function callback`
  },
  {
    propsName: "redirectToSignUp",
    propsDescription: `A trigger function callback`
  }
]
export const docsForgetPassword = [
  {
    propsName: "onSubmit",
    propsDescription: `trigger function callback return an object { email }`
  }
]
export const docsConfirmation = [
  {
    propsName: "checked",
    propsDescription: `controlled components with props checked`
  },
  {
    propsName: "sendConfirmation",
    propsDescription: `trigger function callback`
  }
]
export const docsSimpleForm = [
  {
    propsName: "onSubmit",
    propsDescription: `trigger function callback return an object { email, mobile, name, userName }`
  },
  {
    propsName: "title",
    propsDescription: `The title to display on the component.`
  },
  {
    propsName: "avatar",
    propsDescription: `Accept node element`
  },
  {
    propsName: "notification",
    propsDescription: `Array of String`
  }
]

export const docsPanelProfile = [
  ...commonDocs,
  {
    propsName: "profileName",
    propsDescription: `The profile Name to display on the component.`
  },
  {
    propsName: "address",
    propsDescription: `The address to display on the component.`
  },
  {
    propsName: "tel",
    propsDescription: `The tel to display on the component.`
  },
  {
    propsName: "Email",
    propsDescription: `The tel to display on the component.`
  },
  {
    propsName: "responsive",
    propsDescription: `The responsive props to display the component from mode large to mode small (bool).`
  },
  {
    propsName: "colorHeader",
    propsDescription: `The colorHeader to display new className on the component.`
  },
  {
    propsName: "inlineColorHeader",
    propsDescription: `The inlineColorHeader  display inline style on the component.`
  },
  {
    propsName: "urlImg",
    propsDescription: `The urlImg to display on the component.`
  },
  {
    propsName: "handleDetails",
    propsDescription: `trigger function callback.`
  },
  {
    propsName: "details",
    propsDescription: `The details displayed on the component if is true (bool).`
  },
].filter(c => c.propsName !== "title")
export const docsSupportAssets = [
  ...commonDocs,
  {
    propsName: "type",
    propsDescription: `The type to define the type of asset ( video || img ).`
  },
  {
    propsName: "url",
    propsDescription: `The url to display on the component.`
  },
  {
    propsName: "autoplay",
    propsDescription: `The autoplay is required for video type.`
  },
  {
    propsName: "responsive",
    propsDescription: `The responsive props to display the component from mode large to mode small (bool).`
  },
  {
    propsName: "actionButton",
    propsDescription: `The actionButton is a function Accept node element.`
  },
  {
    propsName: "playListKey",
    propsDescription: `The playListKey is required for video type and you have list of video from youtube.`
  },
]

export const docsTopBar = [
  {
    propsName: "className",
    propsDescription: "An optional className to apply to the component."
  },
  {
    propsName: "onToggleClick",
    propsDescription: `trigger function callback return state of sideBarIsTrue.`
  },
  {
    propsName: "sideBarIsTrue",
    propsDescription: `The sideBarIsTrue is  to collapse the sideBar.`
  },
  {
    propsName: "userName",
    propsDescription: "The user Name to display on the component."
  },
  {
    propsName: "menu",
    propsDescription: `The menu props is array of string to display the list of link into the component.`
  },
  {
    propsName: "authUser",
    propsDescription: `The authUser props define if the user connect (bool).`
  },
  {
    propsName: "underline",
    propsDescription: `The underline props used if you want the active link is underlined.`
  },
  {
    propsName: "color",
    propsDescription: `The color props add new class in the components.`
  },
  {
    propsName: "ProfileBar",
    propsDescription: `The ProfileBar props for display avatar in the components.`
  },
  {
    propsName: "logoName",
    propsDescription: `The logoName props for display logo in the components.`
  },
]
export const docsSideBar = [
  ...commonDocs,
  {
    propsName: "profileName",
    propsDescription: `The profile Name to display on the component.`
  },
  {
    propsName: "address",
    propsDescription: `The address to display on the component.`
  },
  {
    propsName: "tel",
    propsDescription: `The tel to display on the component.`
  },
  {
    propsName: "Email",
    propsDescription: `The tel to display on the component.`
  },
  {
    propsName: "responsive",
    propsDescription: `The responsive props to display the component from mode large to mode small (bool).`
  },
  {
    propsName: "colorHeader",
    propsDescription: `The colorHeader display new className on the component.`
  },
  {
    propsName: "inlineColorHeader",
    propsDescription: `The inlineColorHeader  display inline style on the component.`
  },
  {
    propsName: "urlImg",
    propsDescription: `The urlImg to display on the component.`
  },
  {
    propsName: "social",
    propsDescription: `array of string to pass to the component`
  },
  {
    propsName: "badges",
    propsDescription: `array of string to pass to the component`
  },
  {
    propsName: "renderButton",
    propsDescription: `The renderButton is a function Accept node element.`
  },
  {
    propsName: "colorBody",
    propsDescription: `The colorHeader display new className on the component.`
  },
  {
    propsName: "addMore",
    propsDescription: `trigger function callback.`
  },
  {
    propsName: "ProgressBar",
    propsDescription: `The ProgressBar display { level, indicatorMax, indicatorMin } on the component.`
  },
]
export const docsMenuList = [
  {
    propsName: "listPeople",
    propsDescription: `array of object to pass to the component { name: "user1", urlImg: "http://i.pravatar.cc/150?img=11" }`
  },
  {
    propsName: "listRoom",
    propsDescription: `array of string to pass to the component { name: "user2", urlImg: "http://i.pravatar.cc/150?img=11" }`
  },
  {
    propsName: "colorBody",
    propsDescription: `The colorHeader display new className on the component.`
  },
  {
    propsName: "renderButton",
    propsDescription: `The renderButton is a function Accept node element.`
  },
  {
    propsName: "icon",
    propsDescription: `The icon props add new icon with the icon name like mdi-dots-horizontal.`
  },
  {
    propsName: "addMore",
    propsDescription: `trigger function callback.`
  },
  {
    propsName: "plus",
    propsDescription: `The ProgressBar display { level, indicatorMax, indicatorMin } on the component.`
  },
]
export const docsMenuIcon = [
  {
    propsName: "renderButton",
    propsDescription: `The renderButton is a function Accept node element.`
  },
  {
    propsName: "inlineColor",
    propsDescription: `The color display new className on the component.`
  },
  {
    propsName: "className",
    propsDescription: "An optional className to apply to the component."
  },
]

export const docsAdaSearch = [
  {
    propsName: "handleSearch",
    propsDescription: `trigger function callback.`
  },
]
export const docsAdaCategory = [

]
export const docsAdaStepper = [
  {
    propsName: "stepperData",
    propsDescription: `The stepperData is a function Accept node element.`
  },
  {
    propsName: "active",
    propsDescription: `The icon props add new icon with the icon name like mdi-dots-horizontal.`
  },
  {
    propsName: "widthBorder",
    propsDescription: `The widthBorder props define if the stepper withBorder (bool).`
  },
  {
    propsName: "theme",
    propsDescription: `The theme display new className on the component.`
  },
  {
    propsName: "updateField",
    propsDescription: `trigger function callback return element selected.`
  },
]
export const docsSocialPanel = [
  {
    propsName: "renderButton",
    propsDescription: `The renderButton is a function Accept node element.`
  },
  {
    propsName: "color",
    propsDescription: `The color display new className on the component.`
  }
]
export const docsBadges = [
  ...commonDocs,
  {
    propsName: "stepperData",
    propsDescription: `The stepperData is a function Accept node element.`
  },
  {
    propsName: "width",
    propsDescription: `The width of the avatars on the badges.`
  },
  {
    propsName: "badgesOfAvatars",
    propsDescription: `array of string to display the list of avatars into the component.`
  },
].filter(c => c.propsName !== "description")
export const docsTicket = [
  ...commonDocs,
  {
    propsName: "titleLeft",
    propsDescription: "The titleLeft props display on the left."
  },
  {
    propsName: "titleTop",
    propsDescription: "The titleTop props display on the top."
  },
  {
    propsName: "theme",
    propsDescription: `The theme display new className on the component.`
  },
].filter(c => c.propsName !== "title")
export const docsAdaTag = [
  ...commonDocs,
  {
    propsName: "iconLeft",
    propsDescription: "The titleLeft props display icon on the left."
  },
  {
    propsName: "iconRight",
    propsDescription: "The iconRight props display icon on the right."
  },
  {
    propsName: "theme",
    propsDescription: `The theme display new className on the component.`
  },
  {
    propsName: "readOnly",
    propsDescription: `The props readOnly display the tag on the component.`
  },
].filter(c => c.propsName !== "description")
export const docsAdaAlerts = [
  ...commonDocs,
  {
    propsName: "iconLeft",
    propsDescription: "The titleLeft props display icon on the left."
  },
  {
    propsName: "iconRight",
    propsDescription: "The iconRight props display icon on the right."
  },
  {
    propsName: "theme",
    propsDescription: `The theme display new className on the component.`
  }
].filter(c => c.propsName !== "description")
export const docsAdaPagination = [
  {
    propsName: "items",
    propsDescription: "array of object passed to the component : { name: 'Game', id: 355 }."
  },
  {
    propsName: "onChangePage",
    propsDescription: "A trigger function click event"
  },
  {
    propsName: "pageSize",
    propsDescription: `The size of page on the component.`
  }
]

export const icons = [
  {
    propsName: "icon",
    propsDescription: "name of icon selected."
  },
]

export const avatars = [
  {
    propsName: "avatar",
    propsDescription: "name of avatar selected"
  }
]

export const docsAdaProgress = [
  {
    propsName: "item",
    propsDescription: "variable need it to use progressBar item={{ value: 50, max: 100, min: 0, id: 'ada-progress' }}"
  }
]
export const docsAdaSlider = [
  {
    propsName: "className",
    propsDescription: "An optional className to apply to the component."
  },
  {
    propsName: "label",
    propsDescription: 'name of the slider'
  },
  {
    propsName: "max",
    propsDescription: 'maximum value'
  },
  {
    propsName: "step",
    propsDescription: 'step between slide'
  },
  {
    propsName: "discreteTicks",
    propsDescription: ''
  },
  {
    propsName: "valuePrecision",
    propsDescription: ''
  },
]
export const docsAdaNotifications = [
  {
    propsName: "iconName",
    propsDescription: 'name of the icon'
  },
  {
    propsName: "alertItem",
    propsDescription: 'show alert item'
  },
]
export const docsProfileAvatar = [
  {
    propsName: "active",
    propsDescription: 'if the components is active he show the point green'
  },
  {
    propsName: "path",
    propsDescription: 'path of the img'
  },
]
export const docsAdaHeart = [
  {
    propsName: "id",
    propsDescription: 'id of the components'
  },
  {
    propsName: "checked",
    propsDescription: 'path of the img'
  },
  {
    propsName: "label",
    propsDescription: 'name of the components'
  },
]
