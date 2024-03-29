import { Schema } from 'mongoose';

export const DesafioSchema = new Schema(
  {
    dataHoraDesafio: { type: Date },
    status: { type: String },
    dataHoraSolicitacao: { type: Date },
    dataHoraResposta: { type: Date },
    solicitante: { type: Schema.Types.ObjectId },
    categoria: { type: Schema.Types.ObjectId },
    jogadores: [{ type: Schema.Types.ObjectId }],
    partida: {
      type: Schema.Types.ObjectId,
      ref: 'Partida',
    },
  },
  { timestamps: true, collection: 'desafios' },
);
