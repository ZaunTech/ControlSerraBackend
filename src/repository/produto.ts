import _ from 'lodash';
import BaseRepository from './baseRepository';
import {
  AnyRecord,
  ModelStructure,
  ModelTypes,
  ModelScalarFields,
  MODELS_NAME,
} from './prisma-repo';

// This type will be used if you want to extends the functions in Produto Class

/* eslint-disable @typescript-eslint/no-unused-vars */
type Where = ModelTypes[typeof MODELS_NAME.PRODUTO]['Where'];
type Select = ModelTypes[typeof MODELS_NAME.PRODUTO]['Select'];
type Include = ModelTypes[typeof MODELS_NAME.PRODUTO]['Include'];
type Create = ModelTypes[typeof MODELS_NAME.PRODUTO]['Create'];
type Update = ModelTypes[typeof MODELS_NAME.PRODUTO]['Update'];
type Cursor = ModelTypes[typeof MODELS_NAME.PRODUTO]['Cursor'];
type Order = ModelTypes[typeof MODELS_NAME.PRODUTO]['Order'];
type Delegate = ModelTypes[typeof MODELS_NAME.PRODUTO]['Delegate'];
type GroupBy = ModelTypes[typeof MODELS_NAME.PRODUTO]['GroupBy'];
type Scalar = ModelScalarFields<typeof MODELS_NAME.PRODUTO>;
type Model = ModelStructure[typeof MODELS_NAME.PRODUTO];
/*  eslint-enable @typescript-eslint/no-unused-vars */

class Produto extends BaseRepository(MODELS_NAME.PRODUTO) {}

export default Produto;
