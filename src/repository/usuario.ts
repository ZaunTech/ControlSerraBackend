import _ from 'lodash';
import BaseRepository from './baseRepository';
import {
  AnyRecord,
  ModelStructure,
  ModelTypes,
  ModelScalarFields,
  MODELS_NAME,
} from './prisma-repo';

// This type will be used if you want to extends the functions in Usuario Class

/* eslint-disable @typescript-eslint/no-unused-vars */
type Where = ModelTypes[typeof MODELS_NAME.USUARIO]['Where'];
type Select = ModelTypes[typeof MODELS_NAME.USUARIO]['Select'];
type Include = ModelTypes[typeof MODELS_NAME.USUARIO]['Include'];
type Create = ModelTypes[typeof MODELS_NAME.USUARIO]['Create'];
type Update = ModelTypes[typeof MODELS_NAME.USUARIO]['Update'];
type Cursor = ModelTypes[typeof MODELS_NAME.USUARIO]['Cursor'];
type Order = ModelTypes[typeof MODELS_NAME.USUARIO]['Order'];
type Delegate = ModelTypes[typeof MODELS_NAME.USUARIO]['Delegate'];
type GroupBy = ModelTypes[typeof MODELS_NAME.USUARIO]['GroupBy'];
type Scalar = ModelScalarFields<typeof MODELS_NAME.USUARIO>;
type Model = ModelStructure[typeof MODELS_NAME.USUARIO];
/*  eslint-enable @typescript-eslint/no-unused-vars */

class Usuario extends BaseRepository(MODELS_NAME.USUARIO) {}

export default Usuario;
