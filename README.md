# **Brainrot**

Brainrot has max aura, and god tier rizz
---

## **Features**
- **real rizz is not reading instructions**
---

## **How It Works**
Brainrot operates on a set of **42 memory slots**, each initialized to `0`. You can manipulate the values of these slots using the commands below. The language outputs characters based on the ASCII values of the slots.

---

## **Commands**
| Command  | Description                                                                 |
|----------|-----------------------------------------------------------------------------|
| `RIZZ`   | Add 10 to the current slot.                                                |
| `Brain`   | Add 1 to the current slot.                                                |
| `rot`   | Add -1 to the current slot.                                                |
| `YEE`    | Subtract 5 from the current slot.                                          |
| `TOILET` | Multiply the current slot by 2.                                            |
| `SKIBIDI`| Move to the next slot (wraps around after slot 42).                        |
| `DOP`    | Output the current slot's value as an ASCII character.                     |
| `BOINK`  | If the current slot is a multiple of 7, jump back 3 instructions; otherwise, do nothing. |
| `OMG`    | Take an ASCII character input and store its value in the current slot.     |
| `ROT`    | Swap the values of the current slot and the previous slot.                 |
| `LMAO`   | Set the current slot to a random value between 0 and 127.                  |

---

## **Example Program: "Skibidi Toilet"**
This program outputs the string **"Skibidi"**:

```brainrot
RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ  
YEE YEE YEE rot rot                       
DOP

SKIBIDI
RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ
Brain Brain RIZZ YEE
DOP

SKIBIDI
RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ
RIZZ YEE
DOP

SKIBIDI
RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ
rot rot 
DOP

SKIBIDI
RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ
Brain Brain Brain Brain Brain
DOP

SKIBIDI
RIZZ TOILET RIZZ TOILET TOILET YEE YEE YEE
YEE
DOP

SKIBIDI
Brain TOILET TOILET TOILET TOILET TOILET
TOILET Brain YEE TOILET
YEE YEE YEE
DOP
```
