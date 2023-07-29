const { run } = require("hardhat")

const verify = async (contractAddress, args) => {
    console.log("Verifying contract ..")

    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArgument: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Älready verified")
        } else {
            console.log(e.message)
        }
    }
}

module.exports = { verify }
