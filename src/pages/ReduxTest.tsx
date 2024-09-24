import { Button, Divider, TextField } from '@mui/material';
import DefaultLayout from '../config/layout/DefaultLayout';
import { useAppDispatch } from '../store/hooks';
import { increment, decrement, incrementByAmount } from '../store/models/CounterSlice';
import { useState } from 'react';
import { addCategory } from '../store/models/CategoriesSlice';

function ReduxTest() {
  const config = {
    navigation: true,
    footer: true,
  };

  const [value, setValue] = useState<string>('');

  const dispatch = useAppDispatch();

  function incrementRedux() {
    console.log('IN');
    dispatch(increment());
  }

  function decrementRedux() {
    console.log('DEC');
    dispatch(decrement());
  }

  function handleClickIn() {
    dispatch(incrementByAmount(Number(value)));
  }

  function addCategoryRedux() {
    dispatch(addCategory(value));
  }

  return (
    <DefaultLayout config={config}>
      <h1>Redux Teste</h1>

      <Button variant="outlined" onClick={incrementRedux}>
        +
      </Button>
      <Button variant="outlined" onClick={decrementRedux}>
        -
      </Button>

      <Divider sx={{ margin: '2em' }} />

      <TextField
        variant="outlined"
        type="text"
        value={value}
        onChange={ev => setValue(ev.target.value)}
        label={'Valor'}
      />
      <Button variant="outlined" onClick={addCategoryRedux}>
        Adicionar
      </Button>
    </DefaultLayout>
  );
}

export default ReduxTest;
