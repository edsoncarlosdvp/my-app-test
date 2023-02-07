import { Box, Grid, TextField } from "@mui/material"

export const List = (): JSX.Element => {
    return (
        <>
            <Grid container justifyContent={"center"}>
                <Box component="form"
                    sx={{
                        width: 300,
                        justifyContent: "space-around",
                        display: "flex",
                        flexDirection: "column"
                    }}>
                    <TextField id="outlined-basic" label="Item" variant="outlined" style={{ margin: "1.5rem 0", }} />
                    <TextField
                        id="outlined-multiline-static"
                        label="Lista de itens"
                        multiline
                        rows={10}
                        placeholder="Lista vazia"
                    />
                </Box>
            </Grid>
        </>
    )
}