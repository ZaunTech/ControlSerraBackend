import _ from 'lodash';
import BaseRepository from './baseRepository';
import {
  AnyRecord,
  ModelStructure,
  ModelTypes,
  ModelScalarFields,
  MODELS_NAME,
} from './prisma-repo';

// This type will be used if you want to extends the functions in Orcamento Class

/* eslint-disable @typescript-eslint/no-unused-vars */
type Where = ModelTypes[typeof MODELS_NAME.ORCAMENTO]['Where'];
type Select = ModelTypes[typeof MODELS_NAME.ORCAMENTO]['Select'];
type Include = ModelTypes[typeof MODELS_NAME.ORCAMENTO]['Include'];
type Create = ModelTypes[typeof MODELS_NAME.ORCAMENTO]['Create'];
type Update = ModelTypes[typeof MODELS_NAME.ORCAMENTO]['Update'];
type Cursor = ModelTypes[typeof MODELS_NAME.ORCAMENTO]['Cursor'];
type Order = ModelTypes[typeof MODELS_NAME.ORCAMENTO]['Order'];
type Delegate = ModelTypes[typeof MODELS_NAME.ORCAMENTO]['Delegate'];
type GroupBy = ModelTypes[typeof MODELS_NAME.ORCAMENTO]['GroupBy'];
type Scalar = ModelScalarFields<typeof MODELS_NAME.ORCAMENTO>;
type Model = ModelStructure[typeof MODELS_NAME.ORCAMENTO];
/*  eslint-enable @typescript-eslint/no-unused-vars */

class Orcamento extends BaseRepository(MODELS_NAME.ORCAMENTO) {}

export default Orcamento;
