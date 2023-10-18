import _ from 'lodash';
import BaseRepository from './baseRepository';
import {
  AnyRecord,
  ModelStructure,
  ModelTypes,
  ModelScalarFields,
  MODELS_NAME,
} from './prisma-repo';

// This type will be used if you want to extends the functions in Insumo Class

/* eslint-disable @typescript-eslint/no-unused-vars */
type Where = ModelTypes[typeof MODELS_NAME.INSUMO]['Where'];
type Select = ModelTypes[typeof MODELS_NAME.INSUMO]['Select'];
type Include = ModelTypes[typeof MODELS_NAME.INSUMO]['Include'];
type Create = ModelTypes[typeof MODELS_NAME.INSUMO]['Create'];
type Update = ModelTypes[typeof MODELS_NAME.INSUMO]['Update'];
type Cursor = ModelTypes[typeof MODELS_NAME.INSUMO]['Cursor'];
type Order = ModelTypes[typeof MODELS_NAME.INSUMO]['Order'];
type Delegate = ModelTypes[typeof MODELS_NAME.INSUMO]['Delegate'];
type GroupBy = ModelTypes[typeof MODELS_NAME.INSUMO]['GroupBy'];
type Scalar = ModelScalarFields<typeof MODELS_NAME.INSUMO>;
type Model = ModelStructure[typeof MODELS_NAME.INSUMO];
/*  eslint-enable @typescript-eslint/no-unused-vars */

class Insumo extends BaseRepository(MODELS_NAME.INSUMO) {}

export default Insumo;
