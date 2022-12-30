type AuthorConfType = {
    key: string;
    name: string;
    role: {
        name: string;
        color: string;
    }[];
    aboutAuthor: string;
}[]


const AUTHORS_CONF: AuthorConfType = [
    {
      key: 'DanKorčák',
      name: 'Dan Korčák',
      role: [{ name: 'Tvorba ilustrací', color: 'blue' }],
      aboutAuthor:
        'it est diam, sed volutpat arcu accumsan eu. Curabitur scelerisque, velit vitae viverra ultricies, augue metus sodales ipsum, vitae mollis turpis nisl a an'
    },
    {
      key: 'VeronikaPouchova',
      name: 'Veronika Pouchová',
      role: [{ name: 'Bussiness analytik', color: 'red' }],
      aboutAuthor:
        'Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec pulvinar, lacus eget porta rhoncus, est massa tempus elit, at tincidunt lectus lectus vel dui'
    },
    {
      key: 'PetrHolcak',
      name: 'Petr Holčák',
      role: [{ name: 'vývojář', color: 'green' }, { name: 'analytik', color: 'orange' }, { name: 'Návrh systému', color: 'black' }],
      aboutAuthor:
        'Onsequat pellentesque justo, ac bibendum nisi imperdiet vehicula. Ut malesuada scelerisque enim, nec bibendum lorem porta posuere. Aenean posuere hendrerit neque, id faucibus lacus tempus vehicula. Fusce quis fringilla elit, non fringilla'
    }
  ]

export default AUTHORS_CONF