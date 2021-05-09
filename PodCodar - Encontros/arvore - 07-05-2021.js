

class No {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    addLeft(value) {
        this.left = new No(value);
    }

    addRight(value) {
        this.right = new No(value);
    }
}

function createTree() {
    const raiz = new No(0);

    raiz.addLeft(1);

    raiz.left.addLeft(3);

    raiz.left.left.addLeft(4);
    raiz.left.left.addRight(5);

    raiz.left.left.right.addRight(13);
    raiz.left.left.left.addLeft(12);

    let node2 = new No(2);
    let node6 = new No(6);
    let node7 = new No(7);
    let node8 = new No(8);
    let node9 = new No(9);
    let node10 = new No(10);
    let node11 = new No(11);

    node2.right = node6;
    node6.left = node7;
    node6.right = node8;
    node8.right = node9;
    node9.left = node10;
    node9.right = node11;

    raiz.right = node2;
    return raiz;
}

const raiz = createTree();

function print(no) {
    console.log(no.value);
    // debugger
    if (no.left) print(no.left);
    if (no.right) print(no.right);
}

print(raiz);

function max(no) {
    let maxValue = no.value;
    // debugger;
    if (no.right) {
        maxValue = Math.max(maxValue, max(no.right));
    }
    if (no.left) {
        maxValue = Math.max(maxValue, max(no.left));
    }

    return maxValue;
}

console.log(`Max value: ${max(raiz)}`);

function nodeSum(node) {
    if (node == null) {
        return 0;
    }
    let total = node.value;
    total += nodeSum(node.left);
    total += nodeSum(node.right);
    return total;
}

function encontraMaior(node) {
    if (node == null) {
        return 0;
    }
    const maiorEsq = encontraMaior(node.left)
    const maiorDir = encontraMaior(node.right)
    const maiorValor = Math.max(node.value, maiorEsq, maiorDir)
    return maiorValor;
}
function encontraMenor(node) {
    if (node == null) {
        return 0;
    }
    const menorEsq = encontraMenor(node.left)
    const menorDir = encontraMenor(node.right)
    const menorValor = Math.min(node.value, menorEsq, menorDir)
    return menorValor;
}
console.log(`Menor Valor ${encontraMenor(raiz)} `)
