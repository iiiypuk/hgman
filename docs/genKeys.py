#!/usr/bin/env python3

__author__ = 'Alexander Popov'
__version__ = '1.0.0'
__license__ = 'MIT'

usQwertyKeyboard = 'abcdefghijklmnopqrstuvwxyz'.upper()

def genKeys(alphabet):
        keys = list()

        for letter in alphabet:
            keys.append(
              '<button id="{l}" onclick="offChar(\'{l}\')">{l}</button>'
              .format(l=letter))

        return(keys)

if __name__ == '__main__':
    with open('keys.html', 'w+', encoding='utf-8') as f:
        keyboard = genKeys(usQwertyKeyboard)

        for item in keyboard:
            f.write(item)
