const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    message.delete()

    var ThePromisedDream = 'https://www.wattpad.com/story/264799146?utm_source=android&utm_medium=link&utm_content=story_info&wp_page=story_details_button&wp_uname=Raybr_&wp_originator=%2BokvsQU5aaH%2BAjFfnXGStBV8zKV%2FEi1Z6j8ABBpok%2FGClphW3tC3zQ0jBe%2BlrT8Yaeb7j284T6%2Fz%2BczW9iB8sb6hJvQJNlZ0KO9zrtdZ0AhOU95OZp7vBhxS2q4jwo3S'

    const historys = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('História escritadas por membros do Discord')
        .setDescription(`Quer sua história aqui? Envie no [suporte](https://forms.gle/vtJ5qBqFDd9rL5JU8)`)
        .addFields(
            {
                name: 'Wattpad',
                value: `estou com febre#0999 - [The Promised Dream](${ThePromisedDream})`
            }
        )
    return message.channel.send(historys).then(msg => msg.delete({ timeout: 60000 })).catch(err => { return })
}