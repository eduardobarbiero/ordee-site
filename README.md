# Ordee — Site institucional

Landing page da **Ordee** (produto Barbiero Tecnologia). Hoje institucional + lista de espera; evolução prevista para vitrine de planos e checkout.

## Stack

- HTML / CSS / JS vanilla
- [Vite](https://vite.dev/) para dev server e build estático

## Desenvolvimento

```powershell
cd site
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Build produção

```powershell
npm run build
npm run preview
```

Saída em `dist/`.

## Deploy no Netlify

1. Conecte o repositório em [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import from Git**.
2. Em **Build settings**, defina:
   - **Base directory:** `site`
   - **Build command:** `npm run build` (já está no `netlify.toml`)
   - **Publish directory:** `site/dist` (ou só `dist` se a base for `site`)
3. **Deploy site**.
4. Em **Domain management** → **Add custom domain** → configure DNS no Registro.br (CNAME ou nameservers conforme o Netlify indicar).

O arquivo `site/netlify.toml` já traz build e Node 20. Não precisa de variáveis de ambiente nem redirect — é uma página única com âncoras (`#plataforma`, etc.).

## SEO (Google)

Já incluído no site:

- `title` e `meta description` otimizados
- Open Graph e Twitter Card
- `canonical`, `robots`, `hreflang`
- JSON-LD: Organization, WebSite, SoftwareApplication, FAQPage
- `public/robots.txt` e `public/sitemap.xml` (domínio `https://ordee.com.br`)

**Após publicar no Netlify:**

1. Aponte o domínio `ordee.com.br` (ou ajuste URLs em `index.html`, `sitemap.xml` e `robots.txt` se usar outro domínio).
2. [Google Search Console](https://search.google.com/search-console) → adicionar propriedade → enviar sitemap: `https://ordee.com.br/sitemap.xml`.
3. Confirme a meta `facebook-domain-verification` (já no `<head>`).

## Estrutura

```
site/
  index.html      # landing single-page
  css/main.css    # design system Ordee (#A00184 + fundo branco)
  public/favicon.svg          # favicon quadrado (não distorce)
  public/logo/
    ordee-preto.png           # ícone quadrado — fallback PNG 32px
    ordee-branco.png          # referência de marca (não usar como favicon)
    ordee-grande-preto.png    # logo header/footer (site claro)
    ordee-grande-branco.png   # reservado p/ fundo escuro
  js/main.js      # nav, scroll reveal, formulário lead (mock)
  public/
    termos-de-uso.html      # termos do site institucional
    termos-de-servico.html  # termos pré-contratuais dos serviços
    legal/legal.css         # estilo compartilhado das páginas legais
```

## Documentos legais (site)

| Página | URL | Escopo |
|--------|-----|--------|
| Termos de Uso | `/termos-de-uso.html` | Navegação no site, formulários, lista de espera |
| Termos de Serviço | `/termos-de-servico.html` | Ordee App / Notify — condições pré-contratuais |
| Contrato da plataforma | `app.ordee.com.br/term-of-use/contract.html` | Clientes com conta ativa (SaaS) |

## Empresa (rodapé legal)

| Campo | Valor |
|-------|--------|
| Razão social | BARBIERO TECNOLOGIA DE INFORMACAO LTDA |
| Fantasia | BARBIERO TECNOLOGIA |
| CNPJ | 55.686.963/0001-82 |

## Próximos passos (vendas)

- [ ] Página `/planos` com tiers Ordee App + Notify
- [ ] Integração formulário (HubSpot, Resend, API Ordee)
- [ ] Blog / cases
- [ ] Domínio `ordee.com.br` apontando para `dist`
