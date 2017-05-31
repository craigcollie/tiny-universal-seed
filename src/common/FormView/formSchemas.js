import { Input, Select } from './formElements';

const input = {
  type: 'input',
  component: Input,
};

const select = {
  type: 'select',
  component: Select,
};

export default {
  events: {
    date: input,
    location: select,
    group: select,
    title: input,
    synopsis: input,
  },

  locations: {
    name: input,
  },

  presenters: {
    avatar: input,
    name: input,
  },

  groups: {
    name: input,
  },
};
