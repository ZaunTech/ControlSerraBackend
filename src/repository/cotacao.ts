import _ from 'lodash';
import BaseRepository from './baseRepository';
import {
  AnyRecord,
  ModelStructure,
  ModelTypes,
  ModelScalarFields,
  MODELS_NAME,
} from './prisma-repo';

// This type will be used if you want to extends the functions in Cotacao Class

/* eslint-disable @typescript-eslint/no-unused-vars */
type Where = ModelTypes[typeof MODELS_NAME.COTACAO]['Where'];
type Select = ModelTypes[typeof MODELS_NAME.COTACAO]['Select'];
type Include = ModelTypes[typeof MODELS_NAME.COTACAO]['Include'];
type Create = ModelTypes[typeof MODELS_NAME.COTACAO]['Create'];
type Update = ModelTypes[typeof MODELS_NAME.COTACAO]['Update'];
type Cursor = ModelTypes[typeof MODELS_NAME.COTACAO]['Cursor'];
type Order = ModelTypes[typeof MODELS_NAME.COTACAO]['Order'];
type Delegate = ModelTypes[typeof MODELS_NAME.COTACAO]['Delegate'];
type GroupBy = ModelTypes[typeof MODELS_NAME.COTACAO]['GroupBy'];
type Scalar = ModelScalarFields<typeof MODELS_NAME.COTACAO>;
type Model = ModelStructure[typeof MODELS_NAME.COTACAO];
/*  eslint-enable @typescript-eslint/no-unused-vars */

class Cotacao extends BaseRepository(MODELS_NAME.COTACAO) {}

export default Cotacao;
