import _ from 'lodash';
import BaseRepository from './baseRepository';
import {
  AnyRecord,
  ModelStructure,
  ModelTypes,
  ModelScalarFields,
  MODELS_NAME,
} from './prisma-repo';

// This type will be used if you want to extends the functions in Categoria Class

/* eslint-disable @typescript-eslint/no-unused-vars */
type Where = ModelTypes[typeof MODELS_NAME.CATEGORIA]['Where'];
type Select = ModelTypes[typeof MODELS_NAME.CATEGORIA]['Select'];
type Include = ModelTypes[typeof MODELS_NAME.CATEGORIA]['Include'];
type Create = ModelTypes[typeof MODELS_NAME.CATEGORIA]['Create'];
type Update = ModelTypes[typeof MODELS_NAME.CATEGORIA]['Update'];
type Cursor = ModelTypes[typeof MODELS_NAME.CATEGORIA]['Cursor'];
type Order = ModelTypes[typeof MODELS_NAME.CATEGORIA]['Order'];
type Delegate = ModelTypes[typeof MODELS_NAME.CATEGORIA]['Delegate'];
type GroupBy = ModelTypes[typeof MODELS_NAME.CATEGORIA]['GroupBy'];
type Scalar = ModelScalarFields<typeof MODELS_NAME.CATEGORIA>;
type Model = ModelStructure[typeof MODELS_NAME.CATEGORIA];
/*  eslint-enable @typescript-eslint/no-unused-vars */

class Categoria extends BaseRepository(MODELS_NAME.CATEGORIA) {}

export default Categoria;
