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
export const docsTrackInfo = []
export const docsDownload = []
export const docsDiscover = []
export const docsUpload = []
export const docsContainerTab = []
export const docsInterests = []


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
    propsDescription: `The inlineColorHeader to display inline on the component.`
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
export const docsSupportAssets = []

export const docsTopBar = []
export const docsSideBar = []
export const docsMenuList = []
export const docsMenuIcon = []

export const docsAdaSearch = []
export const docsAdaCategory = []
export const docsAdaStepper = []
export const docsSocialPanel = []
export const docsBadges = []
export const docsTicket = []
export const docsAdaTag = []
export const docsAdaAlerts = []
export const docsAdaPagination = []
