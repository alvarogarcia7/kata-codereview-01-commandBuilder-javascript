/**
 * SOLID Responsabilidad única: el parámetros asume la responsabilidad de 2 parámtros
 * el command y los arguments
 * Lo romperemos en varios pasos para intentar romper los test
 * los más tarde posible
 * Paso 1 mantenemos el parámetro y lo rompemos dentro de la función.
 * Paso 2 eliminamos el caso de crear el comand dentro del for
 * Paso 3 Refactor de código actual
 * Paso 4 Refactor para separar responsabilidades
 */
function buildCommand(commandNameAndArguments) {
	if(!commandNameAndArguments){
		return {};
	}

	var pCommand,
		pArguments,
	    commandBuilded,

	pCommand = commandNameAndArguments[0];
	pArguments = commandNameAndArguments.slice(1, commandNameAndArguments.length);

	commandBuilded = GetCommand(pCommand);

	commandBuilded += GetArguments(pArguments);
	
	return GetFormattedCommandBuilded(commandBuilded);
}

function GetCommand(pCommand)
{
    return pCommand;
}

function GetArguments(pArguments)
{
    var argumentsLength,
        parameters;

    parameters = "";
    argumentsLength = pArguments.length;

    if (argumentsLength > 0) {
        parameters += ":" + pArguments[0];
    }

    for (var i = 1; i < argumentsLength; i++) {
        parameters += "-" + pArguments[i];
    };

    return parameters;
}

function GetFormattedCommandBuilded(pCommandBuilded)
{
    return "[" + pCommandBuilded + "]";
}