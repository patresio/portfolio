-- CreateTable
CREATE TABLE "_ProjetoToTecnolgia" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProjetoToTecnolgia_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProjetoToTecnolgia_B_index" ON "_ProjetoToTecnolgia"("B");

-- AddForeignKey
ALTER TABLE "_ProjetoToTecnolgia" ADD CONSTRAINT "_ProjetoToTecnolgia_A_fkey" FOREIGN KEY ("A") REFERENCES "projetos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjetoToTecnolgia" ADD CONSTRAINT "_ProjetoToTecnolgia_B_fkey" FOREIGN KEY ("B") REFERENCES "tecnologias"("id") ON DELETE CASCADE ON UPDATE CASCADE;
