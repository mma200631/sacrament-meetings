import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-09-06',
    meetingType: 'regular',
    presiding: 'Bishop David Smith',
    conducting: 'Brother Michael Jones',
    announcements: [
      'Ward temple night is scheduled for September 18.',
      'Youth activity will be held on Saturday.'
    ],
    openingHymn: {
      number: 2,
      title: 'The Spirit of God'
    },
    openingPrayer: 'Sister Grace Williams',
    wardBusiness: [
      {
        description: 'Sustaining of the new Primary presidency'
      }
    ],
    stakeBusiness: false,
    sacramentHymn: {
      number: 169,
      title: 'In Remembrance of Thy Suffering'
    },
    speakers: [
      {
        name: 'Sister Rachel Brown',
        topic: 'Faith in Jesus Christ',
        type: 'speaker'
      },
      {
        name: 'Youth Choir',
        topic: 'I Am a Child of God',
        type: 'musical-number'
      }
    ],
    closingHymn: {
      number: 31,
      title: 'O God, Our Help in Ages Past'
    },
    closingPrayer: 'Brother Daniel Davis'
  },

  {
    id: 2,
    date: '2026-08-30',
    meetingType: 'testimony',
    presiding: 'Bishop David Smith',
    conducting: 'Brother Samuel Clark',
    announcements: [
      'Fast Sunday donations may be submitted after the meeting.'
    ],
    openingHymn: {
      number: 227,
      title: 'There Is Sunshine in My Soul Today'
    },
    openingPrayer: 'Sister Hannah Lewis',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 181,
      title: 'Jesus of Nazareth, Savior and King'
    },
    speakers: [],
    closingHymn: {
      number: 89,
      title: 'The Lord Is My Light'
    },
    closingPrayer: 'Brother John Adams'
  },

  {
    id: 3,
    date: '2026-08-23',
    meetingType: 'regular',
    presiding: 'Bishop David Smith',
    conducting: 'Brother Michael Jones',
    announcements: [
      'Relief Society activity will be held this week.'
    ],
    openingHymn: {
      number: 85,
      title: 'How Firm a Foundation'
    },
    openingPrayer: 'Brother Peter Wilson',
    wardBusiness: [
      {
        description: 'Ward conference preparation'
      }
    ],
    stakeBusiness: true,
    sacramentHymn: {
      number: 190,
      title: 'In Memory of the Crucified'
    },
    speakers: [
      {
        name: 'Brother James Anderson',
        topic: 'Following the Savior',
        type: 'speaker'
      },
      {
        name: 'Sister Emily Johnson',
        topic: 'Serving Others',
        type: 'speaker'
      }
    ],
    closingHymn: {
      number: 152,
      title: 'God Be with You Till We Meet Again'
    },
    closingPrayer: 'Sister Olivia Martin'
  },

  {
    id: 4,
    date: '2026-08-16',
    meetingType: 'stake',
    presiding: 'President Robert Taylor',
    conducting: 'Brother William Moore',
    announcements: [],
    openingHymn: {
      number: 94,
      title: 'Come, Ye Thankful People'
    },
    openingPrayer: 'Sister Sarah Thomas',
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: {
      number: 193,
      title: 'I Stand All Amazed'
    },
    speakers: [
      {
        name: 'President Robert Taylor',
        topic: 'Strengthening Families',
        type: 'speaker'
      }
    ],
    closingHymn: {
      number: 227,
      title: 'There Is Sunshine in My Soul Today'
    },
    closingPrayer: 'Brother Matthew Harris'
  },

  {
    id: 5,
    date: '2026-08-09',
    meetingType: 'general',
    presiding: 'President James Walker',
    conducting: 'Sister Rebecca Young',
    announcements: [
      'Members are invited to participate in the upcoming service project.'
    ],
    openingHymn: {
      number: 96,
      title: 'Dearest Children, God Is Near You'
    },
    openingPrayer: 'Brother Andrew King',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 185,
      title: 'Reverently and Meekly Now'
    },
    speakers: [
      {
        name: 'Sister Rebecca Young',
        topic: 'Living with Gratitude',
        type: 'speaker'
      }
    ],
    closingHymn: {
      number: 219,
      title: 'Because I Have Been Given Much'
    },
    closingPrayer: 'Sister Naomi Wright'
  }
];

export function getMeetings(
  date?: string | null
): SacramentMeeting[] {
  if (date) {
    return meetings.filter((meeting) => meeting.date === date);
  }

  return meetings;
}

export function getMeetingById(
  id: number
): SacramentMeeting | null {
  return meetings.find((meeting) => meeting.id === id) ?? null;
}