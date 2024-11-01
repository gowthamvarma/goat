import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'b1b1198a-6d20-4c45-952e-9c8ff6109dd1',
};

export const sampleWithPartialData: IAuthority = {
  name: 'afbfbe2a-3c74-4e1d-8ca0-b83f6524e6ca',
};

export const sampleWithFullData: IAuthority = {
  name: '0c6fd8bf-0db6-4968-88e7-b1950a4b78a4',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
