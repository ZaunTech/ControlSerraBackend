import _ from 'lodash';
import BaseRepository from './baseRepository';
import {
  AnyRecord,
  ModelStructure,
  ModelTypes,
  ModelScalarFields,
  MODELS_NAME,
} from './prisma-repo';

// This type will be used if you want to extends the functions in Cliente Class

/* eslint-disable @typescript-eslint/no-unused-vars */
type Where = ModelTypes[typeof MODELS_NAME.CLIENTE]['Where'];
type Select = ModelTypes[typeof MODELS_NAME.CLIENTE]['Select'];
type Include = ModelTypes[typeof MODELS_NAME.CLIENTE]['Include'];
type Create = ModelTypes[typeof MODELS_NAME.CLIENTE]['Create'];
type Update = ModelTypes[typeof MODELS_NAME.CLIENTE]['Update'];
type Cursor = ModelTypes[typeof MODELS_NAME.CLIENTE]['Cursor'];
type Order = ModelTypes[typeof MODELS_NAME.CLIENTE]['Order'];
type Delegate = ModelTypes[typeof MODELS_NAME.CLIENTE]['Delegate'];
type GroupBy = ModelTypes[typeof MODELS_NAME.CLIENTE]['GroupBy'];
type Scalar = ModelScalarFields<typeof MODELS_NAME.CLIENTE>;
type Model = ModelStructure[typeof MODELS_NAME.CLIENTE];
/*  eslint-enable @typescript-eslint/no-unused-vars */

class Cliente extends BaseRepository(MODELS_NAME.CLIENTE) {}

export default Cliente;
