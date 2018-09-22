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
export const docsUserList = []
export const docsEventList = []
export const docsReviews = []
export const docsFilters = []
export const docsTrackList = []
export const docsRating = []
export const docsProjectList = []
export const docsTimer = []
export const docsTrackInfo = []
export const docsDownload = []
export const docsDiscover = []
export const docsUpload = []
export const docsContainerTab = []
export const docsInterests = []
