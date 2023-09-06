import { useState } from "react";
import { styles } from "../assets/styles/styles";

//State
const Formulario = ({ guardarNota }) => {
    const [id, setId] = useState("");
    const [nombres, setNombres] = useState("");
    const [asignatura, setAsignatura] = useState("");
    const [momento1, setMomento1] = useState("");
    const [momento2, setMomento2] = useState("");
    const [momento3, setMomento3] = useState("");
    const [definitiva, setDefinitiva] = useState("");
    const [observacion, setObservacion] = useState("");

    //crear funcion para calcular notas
    const calcularDefinitiva = () => {
        let nota1 = parseFloat(momento1)
        let nota2 = parseFloat(momento2)
        let nota3 = parseFloat(momento3)

        if (isNaN(nota1) || isNaN( nota2) || isNaN(nota3)) {
            alert("el numero ingresado no es correcto")
            return;
        }
        const notaDefinitiva = (nota1 * 0.3 + nota2 * 0.35 + nota3 * 0.35).toFixed(2)
        setDefinitiva(notaDefinitiva)

        let observacionTexto="";

        if (notaDefinitiva >= 3) {
            observacionTexto("el estudiante gano")
        } else if (notaDefinitiva > 2 && notaDefinitiva <= 2.9) {
            observacionTexto("el estudiante habilita")
        } else {
            observacionTexto("el estudiante pierde")
        }
        setObservacion(observacionTexto)

    }
    //GUARDAR INFORMACION EN ARREGLO DE OBJETOS
    
        const nota = {
            id,
            nombres,
            asignatura,
            momento1,
            momento2,
            momento3,
            definitiva: notaDefinitiva,
            observacion: observacionTexto
        }
    
    //Llamar a la funcion para guardar  Nota
    guardarNota(nota)

    //Limpiar Datos despues de limpiar
    setId("");
    setNombres("");
    setAsignatura("");
    setMomento1("")
    setMomento2("")
    setMomento3("")
    
    return (
        <View style={styles.formulario}>
            <Text>Identificación:</Text>
            <TextInput
                value={id}
                onChangeText={(text) => setId(text)}
                style={styles.input}
            />

            <Text>Nombres:</Text>
            <TextInput
                value={nombres}
                onChangeText={(text) => setNombres(text)}
                style={styles.input}
            />

            <Text>Asignatura:</Text>
            <TextInput
                value={asignatura}
                onChangeText={(text) => setAsignatura(text)}
                style={styles.input}
            />

            <Text>Nombres:</Text>
            <TextInput
                value={nombres}
                onChangeText={(text) => setNombres(text)}
                style={styles.input}
            />

            <Text>Nota 1:</Text>
            <TextInput
                value={momento1}
                onChangeText={(text) => setMomento1(text)}
                style={styles.input}
            />

            <Text>Nota 2:</Text>
            <TextInput
                value={momento2}
                onChangeText={(text) => setMomento2(text)}
                style={styles.input}
            />

            <Text>Nota 3:</Text>
            <TextInput
                value={momento3}
                onChangeText={(text) => setMomento3(text)}
                style={styles.input}
            />

            <Text>Definitiva</Text>
            <TextInput
                value={definitiva}
                onChangeText={(text) => setDefinitiva(text)}
                style={styles.input}
            />

            <Text>Observaciones:</Text>
            <TextInput
                value={observacion}
                onChangeText={(text) => setObservacion(text)}
                style={styles.input}
            />

            <Button title="Calcular" onPress={calcularDefinitiva} />
        </View>
    )
}
export default Formulario;

