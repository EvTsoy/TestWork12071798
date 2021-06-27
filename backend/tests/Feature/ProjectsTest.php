<?php

namespace Tests\Feature;

use App\Models\Project;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;
use Tymon\JWTAuth\Facades\JWTAuth;

class ProjectsTest extends TestCase
{
    use RefreshDatabase;

    protected $user;
    protected $token;
    protected $headers;

    protected function setUp(): void
    {
        parent::setUp();

        $this->user = User::factory()->create();

        $this->token = JWTAuth::fromUser($this->user);

        $this->headers = [
            'Authorization' => "Bearer $this->token",
        ];
    }


    /** @test */
    public function an_authenticated_user_can_add_project()
    {
        $this->withExceptionHandling();
        $this->post(
            'http://localhost/api/projects',
            $this->data(), $this->headers
        );

        $project = Project::first();

        $this->assertEquals('Test title', $project->title);
        $this->assertEquals('Test content', $project->content);
        $this->assertEquals('1', $project->user_id);

    }

    /** @test */
    public function a_title_is_required()
    {
        $response = $this->post('http://localhost/api/projects',
            array_merge($this->data(), ['title' => '']),
            $this->headers);

        $response->assertSessionHasErrors('title');
        $this->assertCount(0, Project::all());

    }

    /** @test */
    public function fields_are_required()
    {
        collect(['title', 'content'])
            ->each(function ($field) {
                $response = $this->post('http://localhost/api/projects', array_merge(
                    $this->data(), [$field => '']
                ), $this->headers);

                $response->assertSessionHasErrors($field);
                $this->assertCount(0, Project::all());
            });
    }

    /** @test */
    public function a_project_can_be_retrieved()
    {
        $project = Project::factory()->create([
            'user_id' => 1
        ]);

        $response = $this->get('http://localhost/api/projects/' . $project->id . "?token=$this->token");

        $response->assertJson([
            'title' => $project->title,
            'content' => $project->content
        ]);
    }

    /** @test */
    public function a_project_can_be_patched()
    {
        $project = Project::factory()->create([
            'user_id' => 1
        ]);

        $response = $this->patch(
            'http://localhost/api/projects/' . $project->id, $this->data(), $this->headers
        );

        $project = $project->fresh();

        $this->assertEquals('Test title', $project->title);
        $this->assertEquals('Test content', $project->content);
        $this->assertEquals('1', $project->user_id);
    }


    /** @test */
    public function a_project_can_be_deleted()
    {
        $project = Project::factory()->create([
            'user_id' => 1
        ]);

        $response = $this->delete(
            'http://localhost/api/projects/' . $project->id, [], $this->headers
        );
        $this->assertCount(0, Project::all());
    }


    private function data()
    {
        return [
            'title' => 'Test title',
            'content' => 'Test content',
            'user_id' => '1'
        ];
    }
}
