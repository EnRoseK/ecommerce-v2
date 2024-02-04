import { AccountNavigationItem } from '@/types';
import { FaRegHeart } from 'react-icons/fa';
import { FiMapPin, FiShoppingBag } from 'react-icons/fi';
import { HiOutlineCog8Tooth } from 'react-icons/hi2';
import { MdOutlineAccountCircle, MdOutlineLogout } from 'react-icons/md';

export const accountNavItems: AccountNavigationItem[] = [
  {
    slug: 'settings',
    name: 'Account Settings',
    icon: MdOutlineAccountCircle,
  },
  {
    slug: 'orders',
    name: 'Orders',
    icon: FiShoppingBag,
  },
  {
    slug: 'wishlist',
    name: 'Wishlist',
    icon: FaRegHeart,
  },
  {
    slug: 'address',
    name: 'Address',
    icon: FiMapPin,
  },
  {
    slug: 'password',
    name: 'Change Password',
    icon: HiOutlineCog8Tooth,
  },
  {
    slug: 'logout',
    name: 'Logout',
    icon: MdOutlineLogout,
  },
];
