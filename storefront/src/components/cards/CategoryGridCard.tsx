import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const children = [
  {
    id: 1,
    name: 'Bags & Accessories',
    slug: 'bags-accessories',
    children: [
      {
        id: 1,
        name: 'Jewelry & Watches',
        slug: 'bags-accessories',
      },
      {
        id: 2,
        name: 'Accessories',
        slug: 'electronic-digital',
      },
      {
        id: 3,
        name: 'Wedding Rings',
        slug: 'garden',
      },
      {
        id: 4,
        name: 'Men Watches',
        slug: 'home-kitchen',
      },
      {
        id: 5,
        name: 'Woman Watches',
        slug: 'lighting-lamps',
      },
    ],
  },
  {
    id: 2,
    name: 'Electronic & Digital',
    slug: 'electronic-digital',
    children: [
      {
        id: 1,
        name: 'Mobiles & Tablets',
        slug: 'bags-accessories',
      },
      {
        id: 2,
        name: 'Camera, Photo & Video',
        slug: 'electronic-digital',
      },
      {
        id: 3,
        name: 'Mobiles',
        slug: 'garden',
      },
      {
        id: 4,
        name: 'Tablets',
        slug: 'home-kitchen',
      },
      {
        id: 5,
        name: 'PC Gaming',
        slug: 'lighting-lamps',
      },
    ],
  },
  {
    id: 3,
    name: 'Garden & Kitchen',
    slug: 'garden',
    children: [
      {
        id: 1,
        name: 'Helicopters & Parts',
        slug: 'bags-accessories',
      },
      {
        id: 2,
        name: 'Toys & Hobbies',
        slug: 'electronic-digital',
      },
      {
        id: 3,
        name: 'Outdoor & Traveling',
        slug: 'garden',
      },
      {
        id: 4,
        name: 'Home & Kitchen',
        slug: 'home-kitchen',
      },
      {
        id: 5,
        name: 'Lighting & Lamps',
        slug: 'lighting-lamps',
      },
    ],
  },
  {
    id: 4,
    name: 'Automotive',
    slug: 'home-kitchen',
    children: [
      {
        id: 1,
        name: 'Automotive',
        slug: 'bags-accessories',
      },
      {
        id: 2,
        name: 'Car Alarms and Security',
        slug: 'electronic-digital',
      },
      {
        id: 3,
        name: 'Car Audio & Speakers',
        slug: 'garden',
      },
      {
        id: 4,
        name: 'Home & Kitchen',
        slug: 'home-kitchen',
      },
      {
        id: 5,
        name: 'Lighting & Lamps',
        slug: 'More Car Accessories',
      },
    ],
  },
  {
    id: 5,
    name: 'Lighting & Lamps',
    slug: 'lighting-lamps',
    children: [
      {
        id: 1,
        name: 'Wedding Rings',
        slug: 'bags-accessories',
      },
      {
        id: 2,
        name: 'Electronic & Digital',
        slug: 'electronic-digital',
      },
      {
        id: 3,
        name: 'Garden & Kitchen',
        slug: 'garden',
      },
      {
        id: 4,
        name: 'Home & Kitchen',
        slug: 'home-kitchen',
      },
      {
        id: 5,
        name: 'Lighter & Cigar Supplies',
        slug: 'lighting-lamps',
      },
    ],
  },
  {
    id: 6,
    name: 'Home Accessories',
    slug: 'accessories',
    children: [
      {
        id: 1,
        name: 'Bags & Accessories',
        slug: 'bags-accessories',
      },
      {
        id: 2,
        name: 'Electronic & Digital',
        slug: 'electronic-digital',
      },
      {
        id: 3,
        name: 'Garden & Kitchen',
        slug: 'garden',
      },
      {
        id: 4,
        name: 'Gift for Man',
        slug: 'home-kitchen',
      },
      {
        id: 5,
        name: 'Gift for Woman',
        slug: 'lighting-lamps',
      },
    ],
  },
];

export const CategoryGridCard: React.FC = () => {
  return (
    <div className='pe-4'>
      <Link href={'#'} legacyBehavior>
        <a className='group items-center justify-between px-0'>
          <Image
            src={'/assets/images/category/collection_1.jpg'}
            alt={'category'}
            width={255}
            height={160}
            priority
            style={{ width: '100%' }}
            className='object-cover group-hover:opacity-80'
          />
        </a>
      </Link>

      <h3 className={`pt-5 text-base font-medium capitalize text-fill-base hover:text-brand`}>
        <Link href={'#'}>Audio music</Link>
      </h3>

      {Array.isArray(children) ? (
        <ul key='content' className='py-3 text-[14px] leading-6'>
          {children?.map((currentItem: any, idx: number) => {
            return (
              <li className='pb-1 hover:text-skin-primary' key={`${idx}`}>
                <Link href={`#`}>{currentItem.name}</Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};
