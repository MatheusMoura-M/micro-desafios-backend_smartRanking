import { Schema } from 'mongoose';

export const PartidaSchema = new Schema(
  {
    desafio: { type: Schema.Types.ObjectId },
    categoria: { type: Schema.Types.ObjectId },
    jogadores: [
      {
        type: Schema.Types.ObjectId,
      },
    ],
    def: { type: Schema.Types.ObjectId },
    resultado: [{ set: { type: String } }],
  },
  { timestamps: true, collection: 'partidas' },
);
