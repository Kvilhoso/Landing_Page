import { memo, useState } from 'react';

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to real endpoint
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className='flex flex-col items-center justify-center py-16 text-center'>
        <div className='text-4xl mb-4'>◈</div>
        <h3 className='text-xl font-light text-white mb-2'>Mensagem recebida</h3>
        <p className='text-gray-400 text-sm'>Nossa equipe entrará em contato em até 24 horas.</p>
      </div>
    );
  }

  const inputCls = "w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white text-[0.9rem] placeholder:text-gray-600 outline-none focus:border-[rgba(201,168,76,0.4)] transition-colors";
  const selectCls = `${inputCls} appearance-none cursor-pointer text-gray-300`;
  const labelCls = "block text-[0.7rem] uppercase tracking-widest text-gray-500 mb-2";

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div>
        <label className={labelCls}>Seu nome</label>
        <input type='text' required placeholder='Como prefere ser chamado' className={inputCls} />
      </div>
      <div>
        <label className={labelCls}>E-mail</label>
        <input type='email' required placeholder='seu@email.com' className={inputCls} />
      </div>
      <div>
        <label className={labelCls}>Capital disponível</label>
        <select required className={selectCls}>
          <option value='' className='bg-[#111]'>Selecione uma faixa</option>
          <option value='entry' className='bg-[#111]'>$1.000 – $3.000 (Plano Entry)</option>
          <option value='pro' className='bg-[#111]'>$3.000 – $15.000 (Plano Pro)</option>
          <option value='dynamic' className='bg-[#111]'>$15.000 – $200.000 (Plano Dynamic)</option>
          <option value='unlimited' className='bg-[#111]'>Acima de $200.000 (Plano Unlimited)</option>
        </select>
      </div>
      <div>
        <label className={labelCls}>Experiência com investimentos</label>
        <select required className={selectCls}>
          <option value='' className='bg-[#111]'>Selecione</option>
          <option value='beginner' className='bg-[#111]'>Iniciante — primeiro investimento</option>
          <option value='intermediate' className='bg-[#111]'>Intermediário — já invisto em renda variável</option>
          <option value='advanced' className='bg-[#111]'>Avançado — já operei trading antes</option>
        </select>
      </div>
      <div>
        <label className={labelCls}>Mensagem (opcional)</label>
        <textarea rows={3} placeholder='Alguma dúvida específica?' className={`${inputCls} resize-none`} />
      </div>
      <button type='submit' className='w-full bg-white text-black py-4 rounded-full text-[0.9rem] font-semibold cursor-pointer hover:bg-gray-100 active:scale-[0.99] transition-all duration-200'>
        Quero adquirir minha licença →
      </button>
    </form>
  );
}

export default memo(ContactForm);
