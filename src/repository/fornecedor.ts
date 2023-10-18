import _ from 'lodash';
import BaseRepository from './baseRepository';
import {
  AnyRecord,
  ModelStructure,
  ModelTypes,
  ModelScalarFields,
  MODELS_NAME,
} from './prisma-repo';

// This type will be used if you want to extends the functions in Fornecedor Class

/* eslint-disable @typescript-eslint/no-unused-vars */
type Where = ModelTypes[typeof MODELS_NAME.FORNECEDOR]['Where'];
type Select = ModelTypes[typeof MODELS_NAME.FORNECEDOR]['Select'];
type Include = ModelTypes[typeof MODELS_NAME.FORNECEDOR]['Include'];
type Create = ModelTypes[typeof MODELS_NAME.FORNECEDOR]['Create'];
type Update = ModelTypes[typeof MODELS_NAME.FORNECEDOR]['Update'];
type Cursor = ModelTypes[typeof MODELS_NAME.FORNECEDOR]['Cursor'];
type Order = ModelTypes[typeof MODELS_NAME.FORNECEDOR]['Order'];
type Delegate = ModelTypes[typeof MODELS_NAME.FORNECEDOR]['Delegate'];
type GroupBy = ModelTypes[typeof MODELS_NAME.FORNECEDOR]['GroupBy'];
type Scalar = ModelScalarFields<typeof MODELS_NAME.FORNECEDOR>;
type Model = ModelStructure[typeof MODELS_NAME.FORNECEDOR];
/*  eslint-enable @typescript-eslint/no-unused-vars */

class Fornecedor extends BaseRepository(MODELS_NAME.FORNECEDOR) {}

export default Fornecedor;
