import _ from 'lodash';
import BaseRepository from './baseRepository';
import {
  AnyRecord,
  ModelStructure,
  ModelTypes,
  ModelScalarFields,
  MODELS_NAME,
} from './prisma-repo';

// This type will be used if you want to extends the functions in Pedido Class

/* eslint-disable @typescript-eslint/no-unused-vars */
type Where = ModelTypes[typeof MODELS_NAME.PEDIDO]['Where'];
type Select = ModelTypes[typeof MODELS_NAME.PEDIDO]['Select'];
type Include = ModelTypes[typeof MODELS_NAME.PEDIDO]['Include'];
type Create = ModelTypes[typeof MODELS_NAME.PEDIDO]['Create'];
type Update = ModelTypes[typeof MODELS_NAME.PEDIDO]['Update'];
type Cursor = ModelTypes[typeof MODELS_NAME.PEDIDO]['Cursor'];
type Order = ModelTypes[typeof MODELS_NAME.PEDIDO]['Order'];
type Delegate = ModelTypes[typeof MODELS_NAME.PEDIDO]['Delegate'];
type GroupBy = ModelTypes[typeof MODELS_NAME.PEDIDO]['GroupBy'];
type Scalar = ModelScalarFields<typeof MODELS_NAME.PEDIDO>;
type Model = ModelStructure[typeof MODELS_NAME.PEDIDO];
/*  eslint-enable @typescript-eslint/no-unused-vars */

class Pedido extends BaseRepository(MODELS_NAME.PEDIDO) {}

export default Pedido;
