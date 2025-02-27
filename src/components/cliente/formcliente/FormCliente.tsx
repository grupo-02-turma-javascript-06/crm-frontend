function FormCliente() {

    return (
        <div className="h-auto min-h-screen flex items-center justify-center bg-[#FFFFFF] p-4">
            <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto bg-[#FFFFFF] 
                            rounded-2xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-bg-black mb-6 sm:mb-8">
                    Cadastro de Cliente
                </h2>

                <form className="space-y-4 mt-2 sm:mt-4">
                    <div className="space-y-2">
                        <label className="text-xs sm:text-sm text-[#9197B3]">
                            Nome:
                        </label>
                        <input 
                            type="text" 
                            placeholder="Digite o nome do cliente"
                            name="nome"
                            required
                            className="w-full text-[#B2BADF] bg-[#F0F3FF] border border-[#F0F3FF] rounded-full p-2"
                        />
                    </div>

                    <div className="space-y-2 gap-2">
                        <label className="text-xs sm:text-sm text-[#9197B3]">
                            E-mail:
                        </label>
                        <input 
                            type="text" 
                            placeholder="Digite o E-mail"
                            name="e-mail"
                            required
                            className="w-full text-[#B2BADF] bg-[#F0F3FF] border border-[#F0F3FF] rounded-full p-2"
                        />
                    </div>

                    <div className="space-y-2 gap-2">
                        <label className="text-xs sm:text-sm text-[#9197B3]">
                            Telefone:
                        </label>
                        <input 
                            type="text" 
                            placeholder="Digite o telefone"
                            name="telefone"
                            required
                            className="w-full text-[#B2BADF] bg-[#F0F3FF] border border-[#F0F3FF] rounded-full p-2"
                        />
                    </div>

                    <div className="space-y-2 gap-2">
                        <label className="text-xs sm:text-sm text-[#9197B3]">
                            Foto:
                        </label>
                        <input 
                            type="text" 
                            placeholder="Insira o link da imagem"
                            name="foto"
                            required
                            className="w-full text-[#B2BADF] bg-[#F0F3FF] border border-[#F0F3FF] rounded-full p-2"
                        />
                    </div>

                    <div className="space-y-2 gap-2">
                        <label className="text-xs sm:text-sm text-[#9197B3]">
                            Oportunidade:
                        </label>
                        <input 
                            type="text" 
                            placeholder="Selecione uma oportunidade"
                            name="oportunidade"
                            required
                            className="w-full text-[#B2BADF] bg-[#F0F3FF] border border-[#F0F3FF] rounded-full p-2"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs sm:text-sm text-[#9197B3]">
                            Histórico de contato:
                        </label>
                        <input 
                            type="text" 
                            placeholder="Descreva o histórico de contato"
                            name="contato"
                            required
                            className="w-full text-[#B2BADF] bg-[#F0F3FF] border border-[#F0F3FF] rounded-full p-2"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        <button
                            type="button"
                            className="w-full bg-[#9B85FA] hover:bg-[#5932EA] text-[#FFFFFF] rounded-full py-2"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="w-full bg-[#C9FFB6] hover:bg-[#45FCAD] text-[#323232] rounded-full py-2"
                        >
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormCliente;