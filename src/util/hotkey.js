const alpha = Array.from(Array(26)).map((e, i) => i + 97);
const lowercase = alpha.map((x) => String.fromCharCode(x));

const keyMap = {
    ALPHABET_PRESS: { sequences: lowercase, action: 'keydown' },
};

export default keyMap;
