# ai-cat-frontend

[![ci](https://github.com/nekochans/ai-cat-frontend/actions/workflows/ci.yml/badge.svg)](https://github.com/nekochans/ai-cat-frontend/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/nekochans/ai-cat-frontend/branch/main/graph/badge.svg?token=FDxy2OqaIf)](https://codecov.io/gh/nekochans/ai-cat-frontend)
[![chromatic](https://github.com/nekochans/ai-cat-frontend/actions/workflows/chromatic.yml/badge.svg)](https://github.com/nekochans/ai-cat-frontend/actions/workflows/chromatic.yml)

ねこの人格を持った AI とお話できるサービスの Web フロントエンド

## Getting Started

### Node.js のインストール（既に終わっている場合は省略）

18 系の最新安定版を利用する。

[asdf](https://asdf-vm.com/) などを使ってバージョン管理を出来るようにするのがオススメ。

参考までに Mac に [asdf](https://asdf-vm.com/) をインストールして Node.js のバージョン管理をしていた時の記録を貼っておく。

- https://zenn.dev/link/comments/d59945cdd21652
- https://zenn.dev/link/comments/370bba4287f86a

### Vercel CLI の導入

以下を参考に導入する。

https://vercel.com/docs/cli

以下でコマンドをインストールする。（グローバルインストールで良い）

```bash
npm i -g vercel
```

インストール環境後に `vercel` を実行する。

以下のような選択肢が出るので認証方法を選択してログインを行う。（GitHub で登録しているケースが多いと思う）

```
? Log in to Vercel
● Continue with GitHub
○ Continue with GitLab
○ Continue with Bitbucket
○ Continue with Email
○ Continue with SAML Single Sign-On
  ─────────────────────────────────
○ Cancel
```

正常にログインが終わるとセットアップしてデプロイを行うかを聞かれるので以下のように回答しながら初期化する。

```
> Success! GitHub authentication complete for keita@exmple.com
? Set up and deploy “~/gitrepos/ai-cat-frontend”? [Y/n] y
? Which scope do you want to deploy to? nekochans
? Found project “nekochans/ai-cat-frontend”. Link to it? [Y/n] y
```

デプロイが開始される。（Preview 環境が作られる）

デプロイが正常に完了すれば Vercel CLI のセットアップは完了。

### 環境変数の取得

ローカル環境で動作させる為に必要な環境変数を取得する。

以下のコマンドを実行。

```bash
vercel env pull .env.local
```

ローカル環境に `.env.local` が存在する場合は以下のようなメッセージが出る事があるが上書きしてしまって問題ない。

```
? Found existing file ".env.local". Do you want to overwrite? [y/N] y
```

これで開発に必要な環境変数が `.env.local` に展開される。

環境変数が増える度にこのコマンドの実行が必要になるので開発環境が正常に動作しない場合はこの手順を再度実行してみると良い。

### 開発環境の起動

以下を実行する。

```bash
npm run dev
```

以下の URL でアクセスが可能です。

http://localhost:22222

### デプロイについて

GitHub 上にコミットが行われる度に Preview 環境の URL が発行されます。

本番環境に関しては `main` ブランチにマージされる事でデプロイが実施されます。
