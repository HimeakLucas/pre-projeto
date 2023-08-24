-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tarefa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "id_categoria" INTEGER,
    CONSTRAINT "Tarefa_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "Categoria" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Tarefa" ("createdAt", "id", "id_categoria", "isActive", "nome", "updatedAt") SELECT "createdAt", "id", "id_categoria", "isActive", "nome", "updatedAt" FROM "Tarefa";
DROP TABLE "Tarefa";
ALTER TABLE "new_Tarefa" RENAME TO "Tarefa";
CREATE UNIQUE INDEX "Tarefa_id_categoria_key" ON "Tarefa"("id_categoria");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
