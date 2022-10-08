var favouriteTransport = "Honda CG125";
var messages = ["I would like to own a [transport]",
    "I want to have a adventure trip on my [transport]",
    "I want my [transport] available all the day.",
    "I take care of my [transport]"
];
document.write('<ul>');
messages.forEach(m=> document.write(`<li>${m.replace('[transport]', favouriteTransport)}</li>`))
document.write('</ul>');