import _ from 'lodash';
import BaseRepository from './baseRepository';
import {
  AnyRecord,
  ModelStructure,
  ModelTypes,
  ModelScalarFields,
  MODELS_NAME,
} from './prisma-repo';

// This type will be used if you want to extends the functions in ListaInsumo Class

/* eslint-disable @typescript-eslint/no-unused-vars */
type Where = ModelTypes[typeof MODELS_NAME.LISTA_INSUMO]['Where'];
type Select = ModelTypes[typeof MODELS_NAME.LISTA_INSUMO]['Select'];
type Include = ModelTypes[typeof MODELS_NAME.LISTA_INSUMO]['Include'];
type Create = ModelTypes[typeof MODELS_NAME.LISTA_INSUMO]['Create'];
type Update = ModelTypes[typeof MODELS_NAME.LISTA_INSUMO]['Update'];
type Cursor = ModelTypes[typeof MODELS_NAME.LISTA_INSUMO]['Cursor'];
type Order = ModelTypes[typeof MODELS_NAME.LISTA_INSUMO]['Order'];
type Delegate = ModelTypes[typeof MODELS_NAME.LISTA_INSUMO]['Delegate'];
type GroupBy = ModelTypes[typeof MODELS_NAME.LISTA_INSUMO]['GroupBy'];
type Scalar = ModelScalarFields<typeof MODELS_NAME.LISTA_INSUMO>;
type Model = ModelStructure[typeof MODELS_NAME.LISTA_INSUMO];
/*  eslint-enable @typescript-eslint/no-unused-vars */

class ListaInsumo extends BaseRepository(MODELS_NAME.LISTA_INSUMO) {}

export default ListaInsumo;
