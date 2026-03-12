import React from "react";
import { InteractionEngine } from "../interactions/InteractionEngine";
import { interactionStyles } from "../interactions/styles";

export const InteractionLab: React.FC = () => {
  return (
    <div className="p-10 bg-zinc-50 rounded-3xl">
      <h2 className="text-3xl font-bold mb-8">Interaction & Hover Lab</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.values(interactionStyles).map((style) => (
          <InteractionEngine key={style.id} style={style}>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-lg">{style.name}</h3>
              <p className="text-sm opacity-80">{style.description}</p>
            </div>
          </InteractionEngine>
        ))}
      </div>
      <p className="mt-8 text-zinc-500">
        This is a modular system. To add more of the 100 styles, simply add a new entry to 
        <code> src/components/interactions/styles.ts</code>.
      </p>
    </div>
  );
};
