# 7 Useful Bash Aliases I Use Everyday

Bash aliases can make you much faster and much more efficient in the terminal. If you have long commands you type many times everyday, you can shorten it with an alias. Here is what i use everyday and how i shortened them.

# 1: Exit & Clear

We all use these commands hundreds of times everyday. You can clear the terminal with **CTRL+L** combination in most terminals but i find typing **‘c’** faster. Likewise i prefer typing **‘x’** instead of a combination like **ALT+F4** or **SUPER+Q**.

```
alias x='exit'
alias c='clear'
```

Now you can pipe these aliases with other commands. Some Examples:

```
# Execute 'make' command and clear the output
sudo make clean install && c

# Open Visual Studio Code and close the terminal
code . && x
```

# 2: COPY

It is extremely useful to copy the output of a command with an alias. You can easily copy the content of a file without opening the file, for example. This alias is equivalent of **pbcopy** of Mac OS.

```
# ~/.bashrc
# Depends on 'xclip'

alias copy='xclip -selection clipboard'

# USAGE
# cat README.md | copy
```

# 3: List

Output of ‘ls’ is not always very readable. Instead, you can use [tree](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjZvoPgvcPsAhV-VBUIHQduCQ0QFjACegQIARAC&url=https%3A%2F%2Flinux.die.net%2Fman%2F1%2Ftree&usg=AOvVaw0W9o0nkqWRF3gbZq21Ytkc). I created a script for it and i can say it replaced ‘ls’ completely.

!['list' output](/blog/useful-bash-aliases1.webp)

This function is just a wrapper around the ‘tree’. It simplifies ‘tree’ command according to my needs.

‘-C’ flag turns the colorization on and ‘ — noreport’ hides the file/directory count.

```
WHAT YOU TYPE      |  WHAT TERMINAL EXECUTES
list              ->  tree --noreport -C -L 1
list 2            ->  tree --noreport -C -L 2 | less -r
list Downloads    ->  tree --noreport -C -L 1 Downloads
```

> [See The Code](https://gist.github.com/BerkinAKKAYA/e2a71a95fc71271a3288c069c159df8a)

> **UPDATE:** I don’t use this script anymore. You can use [**colorls**](https://github.com/athityakumar/colorls.git) instead.

# 4: Replace the CP command

You can easily replace the ‘cp’ command with ‘rsync’. It is able to show you a progress bar unlike the built-in ‘cp’ command.

```
alias cp='rsync -ah — info=progress2'
```

You might want to replace find with [fd](https://github.com/sharkdp/fd) as well.

# 5: Memory & CPU Usage

You can see the Memory & CPU usage without the built-in commands (‘free’ and ‘ps’).

!['result'](/blog/useful-bash-aliases2.webp)

You can create aliases for these commands in _.bashrc_ just like other ones.

> [See The Code](https://gist.github.com/BerkinAKKAYA/482c18ba82c47c3ae784e576bde6d1dd)

# 6: Update & Upgrade

It’s useful to have one alias to update the system and installed packages. You don’t have to update snaps, kernel, packages and stuff one by one.

In Ubuntu and Debian based systems, apt handles the updates:

```
alias update='
    sudo apt-get update &&
    sudo apt-get upgrade &&
    sudo apt-get dist-upgrade
'
```

And Arch linux uses pacman:

```
alias update='sudo pacman -Syyu'
```

You can add snaps and automate other updates here as well.

# 7: Default Parameters

You may be calling a command with same flags / arguments / parameters every time. You can automate that. For example, i never use ‘less’ command without ‘-r’ flag. It solves some problems and there is no drawback as far as i know. I made it ‘default’ with this alias

```
alias less='less -r'
```

I used to have an alias for ‘nano’ as well for the ‘-m’ (mouse support) flag. Then i switched to the ‘nanorc’ file.

---

You can see my nanorc and all my other dotfiles [here](https://github.com/BerkinAKKAYA/dotfiles/tree/main/config).
