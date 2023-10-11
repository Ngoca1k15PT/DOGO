import Constant from './Constant';

export interface DataProfileModel {
  id: number;
  title: string;
  status: boolean;
  icon: string;
}

export default [
  {
    id: 1,
    title: 'Edit Profile',
    status: false,
    icon: Constant.icons.icEditProfile,
  },
  {
    id: 2,
    title: 'Security',
    status: false,
    icon: Constant.icons.icSecurity,
  },
  {
    id: 3,
    title: 'Setting',
    status: false,
    icon: Constant.icons.icSetting,
  },
  {
    id: 4,
    title: 'Help Center',
    status: false,
    icon: Constant.icons.icHelp,
  },
  {
    id: 5,
    title: 'Privacy Policy',
    status: false,
    icon: Constant.icons.icPolicy,
  },
  {
    id: 6,
    title: 'Terms & Conditions',
    status: false,
    icon: Constant.icons.icTerms,
  },
  {
    id: 7,
    title: 'Logout',
    status: true,
    icon: Constant.icons.icLogOut,
  },
];
