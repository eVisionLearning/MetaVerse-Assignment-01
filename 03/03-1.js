var name = "abdul MAJEED";
document.write(`Lowercase => ${name.toLowerCase()}, Uppercase => ${name.toUpperCase()}, `);
document.write(`Title Case => ${name.split(' ').map(m => m.charAt(0).toUpperCase() + m.slice(1).toLowerCase()).join(' ') }`);