import { LocationIcon, MailIcon, PhoneIcon } from '@/icons';
import { Heading, Text } from '@/components';

const data = [
  {
    id: 1,
    icon: <LocationIcon />,
    name: 'Addresses',
    description: 'Acme Widgets 123 Widget Street Acmeville, AC 12345 United States of America',
  },
  {
    id: 2,
    icon: <PhoneIcon />,
    name: 'Phone Number',
    description: '(1800)-000-6890',
  },
  {
    id: 3,
    icon: <MailIcon />,
    name: 'Email',
    description: 'contact@ibigecommerce.com',
  },
];

export const ContactSupport: React.FC = () => {
  return (
    <div className='mb-0 3xl:pr-5'>
      <Heading className='mb-3 lg:mb-4 xl:mb-5' variant='heading'>
        Contact Us
      </Heading>

      <div className='mx-auto mb-6 space-y-4'>
        {data.map((item) => (
          <div
            key={`contact--key${item.id}`}
            className='flex max-w-xs flex-col lg:max-w-sm lg:flex-row xl:pe-7'
          >
            <div className='h-14 w-14  flex-shrink-0 rounded-md border-2 border-border-two p-3'>
              {item.icon}
            </div>
            <div className='mt-4 lg:mt-0 lg:ps-3 2xl:ps-4'>
              <Heading variant='base'>{item.name}</Heading>
              <Text>{item.description}</Text>
            </div>
          </div>
        ))}
      </div>
      <Text className='xl:leading-8'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis, orci ac elementum
        convallis, dolor enim volutpat sapien, id porttitor eros risus convallis nibh. Nullam dui
        diam, semper sed neque ut, fringilla rutrum velit. Nulla facilisi. Integer suscipit, dolor
        sed auctor interdum, libero neque fermentum arcu, in dapibus mauris nisl convallis ante.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </Text>
    </div>
  );
};
