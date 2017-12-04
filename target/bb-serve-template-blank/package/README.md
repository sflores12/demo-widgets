# BB-Serve standalone template

## Install alongside bb-serve (prefer global)

```bash
npm i -g @bb-cli/bb-serve-template-blank
```

## Usage

```bash
bb-serve project --template @bb-cli/bb-serve-template-blank
# OR the shortcut
bb-serve project --template blank
```

## Make Alias

Add to your ~/.bash_profile or ~/.zshrc (etc):

```bash
# bash
echo "alias serve='bb-serve project --template @bb-cli/bb-serve-template-blank'" >> ~/.bash_profile && source ~/.bash_profile

# zsh
echo "alias serve='bb-serve project --template @bb-cli/bb-serve-template-blank'" >> ~/.zshrc && source ~/.zshrc
```

And enjoy:

```
serve
```
