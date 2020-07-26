@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    <h3>
                        Listado
                    </h3>
                    <table class="table table-striped">
                        <thead>
                            <th>#</th>
                            <th>titulo</th> 
                            <th></th>   
                        <thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Prueba 1</td>
                                <td>
                                    <a href="#"><i class="fa fa-eye" aria-hidden="true"></i></a>
                                    <a href="#">Editar</a>
                                    <a href="#">Eliminar</a>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>hoja 1</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
