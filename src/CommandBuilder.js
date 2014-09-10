/**
 * SOLID Responsabilidad �nica: el par�metros asume la responsabilidad de 2 par�mtros
 * el command y los arguments
 * Lo romperemos en varios pasos para intentar romper los test
 * los m�s tarde posible
 * Paso 1 mantenemos el par�metro y lo rompemos dentro de la funci�n.
 * Paso 2 eliminamos el caso de crear el comand dentro del for
 * Paso 3 Refactor de c�digo actual
 * Paso 4 Refactor para separar responsabilidades
 * Paso 5 Rehacemos los Tests para soportar los nuevos par�metros  cambiamos los par�metros
 */
function buildCommand(pCommand, pArguments) {
    if (!pCommand) {
		return {};
	}

	var commandBuilded;

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

    if (!pArguments) {
        return parameters;
    }

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