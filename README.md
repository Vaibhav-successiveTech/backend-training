# backend-training
This repository contains step to install Node.Js on Linux system and learning of node.js
Node.js is a powerful, open-source JavaScript runtime built on Chrome's V8 engine that allows you to run JavaScript code outside the browser, typically on the server.
It’s widely used to build fast, scalable backend applications and APIs thanks to its event-driven, non-blocking I/O model.
It has a wide community and have active support

## 1.Run the following commands
bash
sudo apt update

sudo apt install curl

## 2.Add NodeSource Repository for Node.js LTS
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -

## 3.Install Node.js and npm
   sudo apt install nodejs

# 4. Verify Installation
    node -v
    npm -v